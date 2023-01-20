import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { BarChart, LineChart, PieChart } from '../../../../components';
import { EApiType, EDatePeriod, ICatalogItem } from '../../../../types';
import { IChartFormCallbackProps, IChartFormFields } from '../../../../types/forms';
import { trendActions } from '../../../../store/trend.slice';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { breakdownActions } from '../../../../store/breakdown.slice';
import { percentageActions } from '../../../../store/percentage.slice';
import ChartControlsForm from '../ChartControlsForm/ChartControlsForm';

interface ChartBoxProps {
  events?: Partial<IChartFormCallbackProps>;
  defaults: IChartFormFields;
  children: React.ReactNode;
  searchableFields: Array<Partial<ICatalogItem>>;
  nullableFields: Array<Partial<ICatalogItem>>;
}

function ChartBox(props: ChartBoxProps) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        {props.children}
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <ChartControlsForm
            {...props.events}
            {...props.defaults}
            searchableFields={props.searchableFields}
            nullableFields={props.nullableFields} />
        </Box>
      </Grid>
    </Grid>
  );
}

interface Props {
  defaults: IChartFormFields;
}

export default function (props: Props) {
  const dispatch = useAppDispatch();
  const trendStore = useAppSelector((state) => state.trend);
  const breakdownStore = useAppSelector((state) => state.breakdown);
  const percentageStore = useAppSelector((state) => state.percentage);
  const nullableFieldStore = useAppSelector((state) => state.nullableFields);
  const searchableFieldStore = useAppSelector((state) => state.searchableFields);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box
                display='flex'
                alignItems='center'
                width='100%'
                height='100%'>
                <ChartBox
                  defaults={props.defaults}
                  searchableFields={searchableFieldStore.data}
                  nullableFields={nullableFieldStore.data}
                  events={{
                    onSearchableFieldChange: (searchableField: string) => dispatch(breakdownActions.setForm({ searchableField, searchableFieldTitle: searchableField.split("_").join(" ") })),
                  }}>
                  <PieChart
                    {...breakdownStore.request}
                    height='470px'
                    apiType={EApiType.Breakdown}
                    name="breakdown"
                    text={`Breakdown of customer transactions grouped by ${breakdownStore.form.searchableFieldTitle}`}
                  />
                </ChartBox>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <ChartBox
                defaults={props.defaults}
                searchableFields={searchableFieldStore.data}
                nullableFields={nullableFieldStore.data}
                events={{
                  onPeriodChange: (period: EDatePeriod) => { dispatch(trendActions.setForm({ period })); console.log(period) },
                  onStartDateChange: (startDate: string) => dispatch(trendActions.setForm({ startDate })),
                  onEndDateChange: (endDate: string) => dispatch(trendActions.setForm({ endDate })),
                  onSearchableFieldChange: (searchableField: string) => dispatch(trendActions.setForm({ searchableField, searchableFieldTitle: searchableField.split("_").join(" ") })),
                }}>
                {<LineChart
                  {...trendStore.request}
                  height='324px'
                  period={trendStore.form.period}
                  name="trend"
                  text={`Trend of ${trendStore.form.searchableFieldValue ? `'${trendStore.form.searchableFieldValue}' ` : ''}transactions per ${trendStore.form.period}, grouped by ${trendStore.form.searchableFieldTitle}`}
                />}
              </ChartBox>
            </Grid>
          </Grid>
        </Grid>
        {<Grid item xs={12} sm={6} md={5} borderLeft={1} borderColor='grey.100'>
          <ChartBox
            searchableFields={searchableFieldStore.data}
            nullableFields={nullableFieldStore.data}
            defaults={props.defaults}
            events={{
              onStartDateChange: (startDate: string) => dispatch(percentageActions.setForm({ startDate })),
              onEndDateChange: (endDate: string) => dispatch(percentageActions.setForm({ endDate })),
              onSearchableFieldChange: (searchableField: string) => dispatch(percentageActions.setForm({ searchableField, searchableFieldTitle: searchableField.split("_").join(" ") })),
            }}>
            <BarChart
              {...percentageStore.request}
              height='900px'
              apiType={EApiType.Percentage}
              name="percentage"
              text={`Percentage of Zero-Conf Transactions by ${percentageStore.form.searchableFieldTitle}`}
            />
          </ChartBox>
        </Grid>}
      </Grid>
    </LocalizationProvider>
  );
}
