import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { breakdownUserWalletActions } from '../../store/breakdownUserWallet.slice';
import { requestEffect } from '../../store/requestEffect';
import { trendUserWalletActions } from '../../store/trendUserWallet.slice';
import { EDatePeriod } from '../../types';
import { IRequestConfig } from '../../types/request';
import StatsPage from '../StatsPage/StatsPage';

const baseStatsUrl: string = 'http://3.8.126.93:8081/v1/stats';

export default function StatsPageContainer() {
  const bUserWallet = useAppSelector((state) => state.breakdownUserWallet);
  const tUserWallet = useAppSelector((state) => state.trendUserWallet);

  const [field] = useState('user_wallet'); // output from the StatsPage
  const [period] = useState(EDatePeriod.Week);
  const [startDate] = useState('2021-01-01');
  const [endDate] = useState('2021-05-01');
  const [value] = useState('BTC');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const request = (
      url: string,
      body: Record<string, unknown>,
      actions: any
    ) => {
      const config: IRequestConfig = { url, method: 'POST', body };

      dispatch(requestEffect(config, actions));
    };

    request(`${baseStatsUrl}/breakdown`, { field }, breakdownUserWalletActions);
    request(`${baseStatsUrl}/trend`,{ field: 'payment_method', startDate, endDate, period, value },trendUserWalletActions);
  }, [dispatch, field, period, startDate, endDate, value]);

  return (    
    <StatsPage
          bUserWallet={bUserWallet}
          tUserWallet={tUserWallet}
          period={period}
        />
  );
}
