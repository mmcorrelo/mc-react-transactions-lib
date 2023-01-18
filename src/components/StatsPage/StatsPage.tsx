import React from 'react';
import { ChartSkeleton } from '..';
import { EDatePeriod } from '../../types';
import { IStatsBreakdownRequest, IStatsTrendRequest } from '../../types/request';
import ErrorLoadingChart from '../ErrorLoadingChart/ErrorLoadingChart';
import LineChart from '../LineChart/LineChart';
import PieChart from '../PieChart/PieChart';

interface Props {
  bUserWallet: IStatsBreakdownRequest;
  tUserWallet: IStatsTrendRequest;
  period: EDatePeriod;
}

export default function StatsPage(props: Props) {
  return (
    <main className='container'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 mt-4'>
            { props.tUserWallet.loading && <ChartSkeleton /> }
            { props.tUserWallet.error && <ErrorLoadingChart  message='Error retrieving user wallets trend data.' /> }
            { !props.tUserWallet.loading && !props.tUserWallet.error && <LineChart data={props.tUserWallet.data} period={props.period} name='User Wallets' text='User Wallets'/> }
          </div>
          <div className='col-xs-12 mt-4'>
            { props.bUserWallet.loading && <ChartSkeleton /> }
            { props.bUserWallet.error && <ErrorLoadingChart message='Error retrieving user wallets breakdown data.' /> }
            { !props.bUserWallet.loading && !props.bUserWallet.error && <PieChart data={props.bUserWallet.data} name='User Wallets' text='User Wallets'/> }
          </div>
        </div>
      </div>
    </main>
  );
}
