import React from 'react';

import { EDatePeriod } from '../../types';
import { IStatsBreakdownRequest, IStatsTrendRequest } from '../../types/request';
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
        <div className='col-xs-12 col-md-7'>
          <div className='col-md-12'></div>
          <div className='col-md-12'></div>
          <div className='col-md-12'></div>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-5'></div>
      </div>

      <div className='row mt-4'>
        <div className='col-xs-12 col-md-7'>
          <div className='col-md-12'>
            <LineChart {...props.tUserWallet} period={props.period} name='User Wallets' text='User Wallets'/>
          </div>
          <div className='col-md-12 pt-4'>
            <LineChart {...props.tUserWallet} period={props.period} name='User Wallets' text='User Wallets'/>
          </div>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-5 d-flex flex-column justify-content-center'>
          <PieChart {...props.bUserWallet} name='User Wallets' text='User Wallets'/>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-xs-12 mt-4'>
          <LineChart {...props.tUserWallet} period={props.period} name='User Wallets' text='User Wallets'/>
        </div>
        <div className='col-xs-12 mt-4'>
          <PieChart {...props.bUserWallet} name='User Wallets' text='User Wallets'/>
        </div>
      </div>
    </div>
    </main>
  );
}
