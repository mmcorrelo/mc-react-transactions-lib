import React from 'react';
import { EDatePeriod, IChartData, ILineChartData } from '../../types';
import LineChart from '../LineChart/LineChart';
import PieChart from '../PieChart/PieChart';

interface Props {
  userWalletData: Array<IChartData>;
  trendUserWalletData: Array<ILineChartData>;
  period: EDatePeriod
}

export default function StatsPage(props: Props) {
  return (
    <main className='container'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 mt-4'>
            <LineChart data={ props.trendUserWalletData } period={props.period} name='User Wallets' text='User Wallets'/>
          </div>
          <div className='col-xs-12 mt-4'>
            <PieChart data={ props.userWalletData } name='User Wallets' text='User Wallets'/>
          </div>
        </div>
      </div>
    </main>
  );
}
