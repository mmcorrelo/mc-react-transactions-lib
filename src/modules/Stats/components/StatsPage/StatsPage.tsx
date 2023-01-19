import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { LineChart, PieChart } from '../../../../components';
import { IStatsBreakdownRequest, IStatsTrendRequest, EDatePeriod } from '../../../../types';
import ChartControlsFormContainer from '../../containers/ChartControlsFormContainer/ChartControlsFormContainer';
import { IChartFormCallbackProps } from '../../../../types/forms';

interface ChartBoxProps extends Partial<IChartFormCallbackProps> {}

function ChartBox({ children, props }: { props?: ChartBoxProps, children: React.ReactNode }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ChartControlsFormContainer {...(props || {})} />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}

interface Props {
  bUserWallet: IStatsBreakdownRequest;
  tUserWallet: IStatsTrendRequest;
  period: EDatePeriod;
  events?: Partial<IChartFormCallbackProps>
}

export default function (props: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ChartBox {...props.events}>
                <LineChart
                  {...props.tUserWallet}
                  period={props.period}
                  name='User Wallets'
                  text='User Wallets'
                />
              </ChartBox>
            </Grid>
            <Grid item xs={12}>
              <ChartBox {...props.events}>
                <LineChart
                  {...props.tUserWallet}
                  period={props.period}
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
            <ChartBox {...props.events}>
              <PieChart
                {...props.bUserWallet}
                name='User Wallets'
                text='User Wallets'
              />
            </ChartBox>
           
          </Box>
        </Grid>
        <Grid item xs={12}>
          <ChartBox {...props.events}>
            <LineChart
              {...props.tUserWallet}
              period={props.period}
              name='User Wallets'
              text='User Wallets'
            />
          </ChartBox>
        </Grid>
        <Grid item xs={12}>
          <ChartBox {...props.events}>
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
