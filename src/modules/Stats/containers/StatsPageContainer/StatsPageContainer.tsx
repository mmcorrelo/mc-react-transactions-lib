import React, { useCallback, useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../store';
import { breakdownActions } from '../../../../store/breakdown.slice';
import { percentageActions } from '../../../../store/percentage.slice';
import { requestEffect } from '../../../../store/requestEffect';
import { trendActions } from '../../../../store/trend.slice';
import { EDatePeriod, EMCChartNames, IRequestConfig } from '../../../../types';
import { IChartFormFields } from '../../../../types/forms';
import StatsPage from '../../components/StatsPage/StatsPage';

interface Props {
  baseUrl: string;
  defaults: IChartFormFields
}

export default function StatsPageContainer({ baseUrl, defaults }: Props) {
  const breakdownRequest = useAppSelector((state) => state.breakdown);
  const trendRequest = useAppSelector((state) => state.trend);
  const percentageRequest = useAppSelector((state) => state.percentage);

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
        request(`${baseUrl}/breakdown`, { field: searchableField }, breakdownActions);
        request(`${baseUrl}/trend`,{ field: searchableField, startDate, endDate, period/* , value: searchableFieldValue || undefined  */}, trendActions);
        request(`${baseUrl}/nullablePercentage`, { field: searchableField, startDate, endDate, resolution: 2, nullableField }, percentageActions);
      break;
      case EMCChartNames.TrendChart:
        request(`${baseUrl}/trend`,{ field: searchableField, startDate, endDate, period/* , value: searchableFieldValue || undefined */ }, trendActions);
        break;
      case EMCChartNames.BreakdownChart:
        request(`${baseUrl}/breakdown`, { field: searchableField }, breakdownActions);  
        break;
      case EMCChartNames.PercentageChart:
        request(`${baseUrl}/nullablePercentage`, { field: searchableField, startDate, endDate, resolution: 2, nullableField }, percentageActions);
        break;
      default:
        break;
    }
  }, [searchableField, period, startDate, endDate, searchableField, searchableFieldValue, nullableField, chartId]);

  useEffect(() => {
    requestChartDataById(chartId);
  }, [dispatch, requestChartDataById]);

  return (
    <React.Fragment>
      <StatsPage
        breakdownRequest={breakdownRequest}
        trendRequest={trendRequest}
        percentageRequest={percentageRequest}
        defaults={defaults}
        events={{
          onPeriodChange: (value: EDatePeriod, id: string) => { 
            setPeriod(value); 
            setChartId(id as EMCChartNames); 
          },
          onStartDateChange: (value: string, id: string) => { 
            setStartDate(value); 
            setChartId(id as EMCChartNames); 
          },
          onEndDateChange: (value: string, id: string) => { 
            setEndDate(value);
            setChartId(id as EMCChartNames); 
          },
          onSearchableFieldChange: (value: string, id: string) => { 
            setSearchableField(value); 
            setChartId(id as EMCChartNames); 
          },
          onNullableFieldChange: (value: string, id: string) => {
            setNullableField(value); 
            setChartId(id as EMCChartNames);
          }
        }}
      />
    </React.Fragment>
  );
}
