import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import store, { useAppDispatch, useAppSelector } from '../../store';
import { breakdownUserWalletActions } from '../../store/breakdownUserWallet.slice';
import { requestEffect } from '../../store/requestEffect';
import { trendUserWalletActions } from '../../store/trendUserWallet.slice';
import { EDatePeriod } from '../../types';
import { IRequestConfig } from '../../types/request';
import StatsPage from '../StatsPage/StatsPage';

const baseStatsUrl: string = 'http://127.0.0.1:6060/v1/stats';

export default function StatsPageContainer() {
  const { data: breakdownUserWalletData, loading, error } = useAppSelector((state) => state.breakdownUserWallet);
  const { data: trendUserWalletData } = useAppSelector((state) => state.trendUserWallet);
  const [field] = useState('user_wallet');
  const [period] = useState(EDatePeriod.Month);
  const [startDate] = useState('2021-01-01');
  const [endDate] = useState('2021-05-01');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const request = (url: string, body: Record<string, unknown>, actions: any) => {
      const config: IRequestConfig = { url, method: 'POST', body };

      dispatch(requestEffect(config, actions));
    };

    request(`${baseStatsUrl}/breakdown`, { field }, breakdownUserWalletActions);
    request( `${baseStatsUrl}/trend`, { field, startDate, endDate, period }, trendUserWalletActions);
  }, [dispatch, field, period, startDate, endDate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Provider store={store}>
      <StatsPage
        userWalletData={breakdownUserWalletData}
        trendUserWalletData={trendUserWalletData}
        period= {period}
      />
    </Provider>
  );
}
