import React from 'react';
import { ICatalogItem } from '../../../../types';
import { IChartFormCallbackProps } from '../../../../types/forms';

import ChartControlsForm from '../../components/ChartControlsForm/ChartControlsForm';

const searchableFields: Array<Partial<ICatalogItem>> = [
  {
    key: 'payment_method',
    title: 'Payment Method'
  },
  {
    key: 'purchase_category',
    title: 'Purchase Category'
  },
  {
    key: 'country',
    title: 'Country'
  },
  {
    key: 'exchange_name',
    title: 'Exchange Name'
  },
  {
    key: 'user_wallet',
    title: 'User Wallet'
  }
];

const nullableFields: Array<Partial<ICatalogItem>> = [
  {
    key: 'zero_conf_time',
    title: 'Zero Conf Time',
    nullable: true,
    searchable: false,
    type: 'DATE'
  },
  {
    key: 'time_to_onchain_conf',
    title: 'Time to Onchain Conf',
    nullable: true,
    searchable: false,
    type: 'INTEGER'
  },
  {
    key: 'exchange_name',
    title: 'Exchange Name',
    nullable: true,
    searchable: true,
    type: 'STRING'
  },
  {
    key: 'fee_rate',
    title: 'Fee Rate',
    nullable: true,
    searchable: false,
    type: 'INTEGER'
  },
  {
    key: 'fee_estimates',
    title: 'Fee Estimates',
    nullable: true,
    searchable: false,
    type: 'INTEGER'
  },
  {
    key: 'user_wallet',
    title: 'User Wallet',
    nullable: true,
    searchable: true,
    type: 'STRING'
  }
];

interface Props extends Partial<IChartFormCallbackProps> {}

export default function (props: Props) {
  return (
    <ChartControlsForm
      {...props}
      searchableFields={searchableFields}
      nullableFields={nullableFields}
    />
  );
}
