import React, { useCallback, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../store';
import { breakdownActions } from '../../../../store/breakdown.slice';
import { percentageActions } from '../../../../store/percentage.slice';
import { requestEffect } from '../../../../store/requestEffect';
import { trendActions } from '../../../../store/trend.slice';
import { IRequestConfig } from '../../../../types';
import { IChartFormFields } from '../../../../types/forms';
import StatsPage from '../../components/StatsPage/StatsPage';

interface Props {
  baseUrl: string;
  defaults: IChartFormFields
}

export default function StatsPageContainer({ baseUrl, defaults }: Props) {
  const dispatch = useAppDispatch();
  const breakdownForm = useAppSelector((state) => state.breakdown.form);
  const trendForm = useAppSelector((state) => state.trend.form);
  const percentageForm = useAppSelector((state) => state.percentage.form);

  const request = useCallback((url: string, body: Record<string, unknown>, actions: any, ready: boolean) => {
    if (ready) {
      const config: IRequestConfig = { url, method: 'POST', body };
      
      dispatch(requestEffect(config, actions));
    }
  }, [dispatch, requestEffect]);

  useEffect(() => {
    request(`${baseUrl}/trend`, {
      field: trendForm.searchableField,
      startDate: trendForm.startDate,
      endDate: trendForm.endDate,
      period: trendForm.period
    }, trendActions, trendForm.initialized);
  }, [dispatch, trendForm]);

  useEffect(() => {
    request(`${baseUrl}/breakdown`, { field: breakdownForm.searchableField }, breakdownActions, breakdownForm.initialized);
  }, [dispatch, breakdownForm]);

  useEffect(() => {
    request(`${baseUrl}/nullablePercentage`, {
      field: percentageForm.searchableField,
      startDate: percentageForm.startDate,
      endDate: percentageForm.endDate,
      resolution: 2, nullableField: percentageForm.nullableField
    }, percentageActions, percentageForm.initialized);
  }, [dispatch, percentageForm]);

  useEffect(() => {
    dispatch(trendActions.setForm(defaults));
    dispatch(breakdownActions.setForm(defaults));
    dispatch(percentageActions.setForm(defaults));

  }, [dispatch, defaults]);

  return (
    <React.Fragment>
      <StatsPage defaults={defaults}/>
    </React.Fragment>
  );
}
