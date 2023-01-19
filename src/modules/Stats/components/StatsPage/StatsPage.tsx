import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { LineChart, PieChart } from '../../../../components';
import { IStatsBreakdownRequest, IStatsTrendRequest, EMCChartNames } from '../../../../types';
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ChartControlsFormContainer chartId={ props.chartId } {...props.events} {...props.defaults} />
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </Grid>
  );
}

interface Props {
  bUserWallet: IStatsBreakdownRequest;
  tUserWallet: IStatsTrendRequest;
  defaults: IChartFormFields;
  events?: Partial<IChartFormCallbackProps>
}

export default function (props: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ChartBox
                chartId={EMCChartNames.ChartOne}
                defaults={props.defaults}
                events={{ 
                  ...props.events, 
                  // onPeriodChange: undefined,
                  // onStartDateChange: undefined, 
                  // onEndDateChange: undefined, 
                  // onSearchableFieldChange: undefined,
                  onNullableFieldChange: undefined 
                }}>
                <LineChart
                  {...props.tUserWallet}
                  period={props.defaults.period}
                  name='User Wallets'
                  text='User Wallets'
                />
              </ChartBox>
            </Grid>
            <Grid item xs={12}>
              <ChartBox 
                chartId={EMCChartNames.ChartTwo}
                defaults={props.defaults}
                events={{ 
                  ...props.events, 
                  // onPeriodChange: undefined,
                  // onStartDateChange: undefined, 
                  // onEndDateChange: undefined, 
                  // onSearchableFieldChange: undefined,
                  onNullableFieldChange: undefined 
                }}>
                <LineChart
                  {...props.tUserWallet}
                  period={props.defaults.period}
                  name='User Wallets'
                  text='User Wallets'
                />
              </ChartBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            width='100%'
            height='100%'
          >
            <ChartBox
              chartId={EMCChartNames.ChartThree}
              defaults={props.defaults} 
              events={{ 
                ...props.events, 
                // onPeriodChange: undefined,
                // onStartDateChange: undefined, 
                // onEndDateChange: undefined, 
                // onSearchableFieldChange: undefined,
                onNullableFieldChange: undefined 
              }}>
              <PieChart
                {...props.bUserWallet}
                name='User Wallets'
                text='User Wallets'
              />
            </ChartBox>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <ChartBox
            chartId={EMCChartNames.ChartFour}
            defaults={props.defaults} 
            events={{ 
              ...props.events, 
              // onPeriodChange: undefined,
              // onStartDateChange: undefined, 
              // onEndDateChange: undefined, 
              // onSearchableFieldChange: undefined,
              onNullableFieldChange: undefined 
            }}>
            <LineChart
              {...props.tUserWallet}
              period={props.defaults.period}
              name='User Wallets'
              text='User Wallets'
            />
          </ChartBox>
        </Grid>
        <Grid item xs={12}>
          <ChartBox
            chartId={EMCChartNames.ChartFive}
            defaults={props.defaults} 
            events={{ 
              ...props.events, 
              // onPeriodChange: undefined,
              // onStartDateChange: undefined, 
              // onEndDateChange: undefined, 
              // onSearchableFieldChange: undefined,
              onNullableFieldChange: undefined 
            }}>
            <PieChart
              {...props.bUserWallet}
              name='User Wallets'
              text='User Wallets'
            />
          </ChartBox>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
