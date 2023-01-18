import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { breakdownUserWalletActions } from '../../store/breakdownUserWallet.slice';
import { requestEffect } from '../../store/requestEffect';
import { trendUserWalletActions } from '../../store/trendUserWallet.slice';
import { EDatePeriod } from '../../types';
import { IRequestConfig } from '../../types/request';
import StatsPage from '../StatsPage/StatsPage';

const baseStatsUrl: string = 'http:///localhost:6060/v1/stats';

export default function StatsPageContainer() {
  const bUserWallet = useAppSelector((state) => state.breakdownUserWallet);
  const tUserWallet = useAppSelector((state) => state.trendUserWallet);

  const [field] = useState('user_wallet'); // output from the StatsPage
  const [period, setPeriod] = useState(EDatePeriod.Week);
  const [startDate, setStartDate, ] = useState('2021-01-01');
  const [endDate, setEndDate,] = useState('2021-05-01');
  const [value] = useState('BTC');
  const dispatch = useAppDispatch();

  const request = (url: string, body: Record<string, unknown>, actions: any) => {
    console.log(body);
    const config: IRequestConfig = { url, method: 'POST', body };

    dispatch(requestEffect(config, actions));
  };

  useEffect(() => {
    request(`${baseStatsUrl}/breakdown`, { field }, breakdownUserWalletActions);
  }, [dispatch, field]);

  useEffect(() => {
    request(`${baseStatsUrl}/trend`,{ field: 'user_wallet', startDate, endDate, period, value: 'Ledger' }, trendUserWalletActions);
  }, [dispatch, field, period, startDate, endDate, value]);

  return (    
    <React.Fragment>
      <select value={period} onChange={event => setPeriod(event.target.value as EDatePeriod)}>
        <option value={EDatePeriod.Day}>Day</option>
        <option value={EDatePeriod.Week}>Week</option>
        <option value={EDatePeriod.Month}>Month</option>
        <option value={EDatePeriod.Year}>Year</option>
      </select>
      <input type="date" id="datepicker" name="datepicker" max={endDate} value={startDate} onChange={event => setStartDate(event.target.value)}></input>
      <input type="date" id="datepicker" name="datepicker" min={startDate} value={endDate} onChange={event => setEndDate(event.target.value)}></input>
      <StatsPage
            bUserWallet={bUserWallet}
            tUserWallet={tUserWallet}
            period={period}
          />
    </React.Fragment>
  );
}
