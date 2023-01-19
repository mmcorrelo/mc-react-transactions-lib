import React, { useCallback, useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../store';
import { breakdownUserWalletActions } from '../../../../store/breakdownUserWallet.slice';
import { requestEffect } from '../../../../store/requestEffect';
import { trendUserWalletActions } from '../../../../store/trendUserWallet.slice';
import { EDatePeriod, EMCChartNames, IRequestConfig } from '../../../../types';
import { IChartFormFields } from '../../../../types/forms';
import StatsPage from '../../components/StatsPage/StatsPage';

const baseStatsUrl: string = 'http:///localhost:6060/v1/stats';

const defaults: IChartFormFields = {
  period: EDatePeriod.Day,
  startDate: '2021-01-01',
  endDate: '2021-05-01',
  searchableField: 'user_wallet',
  searchableFieldValue: 'Mew',
  nullableField: 'user_wallet',
}

export default function StatsPageContainer() {
  const bUserWallet = useAppSelector((state) => state.breakdownUserWallet);
  const tUserWallet = useAppSelector((state) => state.trendUserWallet);

  const [chartId, setChartId] = useState(EMCChartNames.All);
  const [period, setPeriod] = useState(defaults.period);
  const [startDate, setStartDate] = useState(defaults.startDate);
  const [endDate, setEndDate] = useState(defaults.endDate);
  const [searchableField, setSearchableField] = useState(defaults.searchableField);
  const [searchableFieldValue/* , setSearchableFieldValue */] = useState(defaults.searchableFieldValue);
  const [nullableField, setNullableField] = useState(defaults.nullableField);
  const dispatch = useAppDispatch();

  const request = useCallback(( url: string, body: Record<string, unknown>, actions: any) => {
    const config: IRequestConfig = { url, method: 'POST', body };

    dispatch(requestEffect(config, actions));
  }, [dispatch, requestEffect]);

  const requestChartDataById = useCallback((chartId: EMCChartNames): void =>  {
    switch(chartId) {
      case EMCChartNames.All:
        request(`${baseStatsUrl}/breakdown`, { field: searchableField }, breakdownUserWalletActions);
        request(`${baseStatsUrl}/trend`,{ field: searchableField, startDate, endDate, period, value: searchableFieldValue || undefined }, trendUserWalletActions);
      break;
      case EMCChartNames.ChartOne:
        request(`${baseStatsUrl}/trend`,{ field: searchableField, startDate, endDate, period, value: searchableFieldValue || undefined }, trendUserWalletActions);
        break;
      case EMCChartNames.ChartTwo:
          break;
      case EMCChartNames.ChartThree:
        request(`${baseStatsUrl}/breakdown`, { field: searchableField }, breakdownUserWalletActions);
        break;
      case EMCChartNames.ChartFour:
        break;
      case EMCChartNames.ChartFive:
        break;
      default:
        break;
    }
  }, [searchableField, period, startDate, endDate, searchableField, searchableFieldValue, chartId]);

  useEffect(() => {
    requestChartDataById(chartId);
  }, [dispatch, requestChartDataById]);

  useEffect(() => {
    console.log('nullableField:', nullableField);
  }, [dispatch, nullableField]);

  return (
    <React.Fragment>
      <StatsPage
        bUserWallet={bUserWallet}
        tUserWallet={tUserWallet}
        defaults={defaults}
        events= {{
          onPeriodChange: (value: EDatePeriod, id: string) => { setPeriod(value); setChartId(id as EMCChartNames); },
          onStartDateChange: (value: string, id: string) =>{ setStartDate(value); setChartId(id as EMCChartNames); },
          onEndDateChange:(value: string, id: string) =>{ setEndDate(value); setChartId(id as EMCChartNames); },
          onSearchableFieldChange: (value: string, id: string) => { setSearchableField(value); setChartId(id as EMCChartNames); },
          onNullableFieldChange: (value: string, id: string) => { setNullableField(value); setChartId(id as EMCChartNames); }
        }}
      />
    </React.Fragment>
  );
}
