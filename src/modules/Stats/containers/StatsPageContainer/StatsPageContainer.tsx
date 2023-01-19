import { SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';

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

  const [field] = useState('user_wallet'); // output from the StatsPage
  const [period] = useState(EDatePeriod.Week);
  const [startDate] = useState('2021-01-01');
  const [endDate] = useState('2021-05-01');
  const [value] = useState('BTC');
  const dispatch = useAppDispatch();

  const request = ( url: string, body: Record<string, unknown>, actions: any) => {
    const config: IRequestConfig = { url, method: 'POST', body };

    dispatch(requestEffect(config, actions));
  };

  useEffect(() => {
    request(`${baseStatsUrl}/breakdown`, { field }, breakdownUserWalletActions);
  }, [dispatch, field]);

  useEffect(() => {
    request(`${baseStatsUrl}/trend`,{ field: 'user_wallet', startDate, endDate, period, value: 'Ledger' }, trendUserWalletActions);
  }, [dispatch, field, period, startDate, endDate, value]);

  const onPeriodChangeHandle = (value: SelectChangeEvent<EDatePeriod>) => {
    console.log('onPeriodChangeHandle: ', value);
  }
  const onStartDateChangeHandle = (value: string) => {
    console.log('onStartDateChangeHandle: ', value);
  }
  const onEndDateChangeHandle = (value: string) => {
    console.log('onEndDateChangeHandle: ', value);
  }
  const onSearchableFieldChangeHandle = (value: SelectChangeEvent<string>) => {
    console.log('onSearchableFieldChangeHandle: ', value);
  }
  const onNullableFieldChangeHandle = (value: SelectChangeEvent<string>) => {
    console.log('onNullableFieldChangeHandle: ', value);
  }

  return (
    <React.Fragment>
      <StatsPage
        bUserWallet={bUserWallet}
        tUserWallet={tUserWallet}
        period={period}
        events= {{
          onPeriodChange: onPeriodChangeHandle,
          onStartDateChange: onStartDateChangeHandle,
          onEndDateChange: onEndDateChangeHandle,
          onSearchableFieldChange: onSearchableFieldChangeHandle,
          onNullableFieldChange: onNullableFieldChangeHandle,
        }}
      />
    </React.Fragment>
  );
}
