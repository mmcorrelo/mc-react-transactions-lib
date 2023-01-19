import React, { useCallback, useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../store';
import { breakdownUserWalletActions } from '../../../../store/breakdownUserWallet.slice';
import { requestEffect } from '../../../../store/requestEffect';
import { trendUserWalletActions } from '../../../../store/trendUserWallet.slice';
import { EDatePeriod, IRequestConfig } from '../../../../types';
import StatsPage from '../../components/StatsPage/StatsPage';

const baseStatsUrl: string = 'http:///localhost:6060/v1/stats';

export default function StatsPageContainer() {
  const bUserWallet = useAppSelector((state) => state.breakdownUserWallet);
  const tUserWallet = useAppSelector((state) => state.trendUserWallet);

  // const [field] = useState('user_wallet'); // output from the StatsPage
  const [period, setPeriod] = useState(EDatePeriod.Week);
  const [startDate, setStartDate] = useState('2021-01-01');
  const [endDate, setEndDate] = useState('2021-05-01');
  const [searchableField, setSearchableField] = useState('user_wallet');
  const [nullableField, setNullableField] = useState('user_wallet');
  const dispatch = useAppDispatch();

  const request = useCallback(( url: string, body: Record<string, unknown>, actions: any) => {
    const config: IRequestConfig = { url, method: 'POST', body };

    dispatch(requestEffect(config, actions));
  }, [dispatch, requestEffect]);

  useEffect(() => {
    request(`${baseStatsUrl}/breakdown`, { field: searchableField }, breakdownUserWalletActions);
  }, [request, searchableField]);

  useEffect(() => {
    console.log('searchableField:', searchableField);
    console.log()
    request(`${baseStatsUrl}/trend`,{ field: searchableField, startDate, endDate, period/* , value: searchableField */ }, trendUserWalletActions);
  }, [dispatch, searchableField, period, startDate, endDate, searchableField]);

  useEffect(() => {
    console.log('nullableField:', nullableField);
  }, [dispatch, nullableField]);

  return (
    <React.Fragment>
      <StatsPage
        bUserWallet={bUserWallet}
        tUserWallet={tUserWallet}
        period={period}
        events= {{
          onPeriodChange: (value: EDatePeriod) => setPeriod(value),
          onStartDateChange: (value: string) => setStartDate(value),
          onEndDateChange:(value: string) => setEndDate(value),
          onSearchableFieldChange: (value: string) => setSearchableField(value),
          onNullableFieldChange: (value: string) => setNullableField(value)
        }}
      />
    </React.Fragment>
  );
}
