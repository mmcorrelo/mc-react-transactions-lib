import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { LineChart, BarChart, PieChart } from '../../../../components';
import { IStatsTrendRequest, EMCChartNames, IStatsPercentageRequest, IStatsBreakdownRequest, EApiType } from '../../../../types';
import ChartControlsFormContainer from '../../containers/ChartControlsFormContainer/ChartControlsFormContainer';
import { IChartFormCallbackProps, IChartFormFields } from '../../../../types/forms';

interface ChartBoxProps  {
  events?: Partial<IChartFormCallbackProps>;
  defaults: IChartFormFields;
  children: React.ReactNode,
  chartId: string;
}

function ChartBox(props: ChartBoxProps) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
          {props.children}
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <ChartControlsFormContainer chartId={ props.chartId } {...props.events} {...props.defaults} />
        </Box>
      </Grid>
    </Grid>
  );
}

interface Props {
  breakdownRequest: IStatsBreakdownRequest;
  trendRequest: IStatsTrendRequest;
  percentageRequest: IStatsPercentageRequest;
  defaults: IChartFormFields;
  events?: Partial<IChartFormCallbackProps>
}

export default function (props: Props) {
  const [bTitle, setBTitle] =useState(props.defaults.searchableField);

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
                    chartId={EMCChartNames.BreakdownChart}
                    defaults={props.defaults} 
                    events={{ 
                      ...props.events, 
                      onPeriodChange: undefined,
                      onStartDateChange: undefined, 
                      onEndDateChange: undefined, 
                      onSearchableFieldChange: (value, id) => {
                        props.events!.onSearchableFieldChange!(value, id);
                        setBTitle(value);
                      },
                      onNullableFieldChange: undefined 
                    }}>
                    <PieChart
                      { ...props.breakdownRequest }
                      height='470px'
                      apiType={ EApiType.Breakdown }
                      name={bTitle}
                      text={`Customer breakdown by ${bTitle}`}
                    />
                </ChartBox>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <ChartBox
                chartId={EMCChartNames.TrendChart}
                defaults={props.defaults} 
                events={{ 
                  ...props.events, 
                  // onPeriodChange: undefined,
                  // onStartDateChange: undefined, 
                  // onEndDateChange: undefined, 
                  // onSearchableFieldChange: undefined,
                  onNullableFieldChange: undefined 
                }}>
                {<LineChart
                  {...props.trendRequest}
                  height='324px'
                  period={props.defaults.period}
                  name='User Wallets'
                  text='User Wallets'
                />}
              </ChartBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={5} borderLeft={1} borderColor='grey.100'>
          <ChartBox
            chartId={EMCChartNames.PercentageChart}
            defaults={props.defaults}
            events={{ 
              ...props.events, 
              onPeriodChange: undefined,
              // onStartDateChange: undefined, 
              // onEndDateChange: undefined, 
              // onSearchableFieldChange: undefined,
              // onNullableFieldChange: undefined 
            }}>
            <BarChart
              { ...props.percentageRequest }
              height='900px'
              apiType={ EApiType.Percentage }
              name='User Wallets'
              text='User Wallets'
            />
          </ChartBox>
        </Grid>
        
      </Grid>
    </LocalizationProvider>
  );
}
