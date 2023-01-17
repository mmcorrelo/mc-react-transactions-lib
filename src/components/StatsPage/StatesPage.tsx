import React from 'react';
import { IPieData } from '../../types';
import { PieChart } from '../PieChart/PieChart';

export function StatsPage() {
  const data = [
    {
      value: 9999,
      name: 'Klever'
    },
    {
      value: 9999,
      name: 'Muun'
    },
    {
      value: 9999,
      name: 'Trust'
    },
    {
      value: 9999,
      name: 'Rainbow'
    },
    {
      value: 9999,
      name: 'Ledger'
    },
    {
      value: 10011,
      name: 'Unknown'
    },
    {
      value: 9999,
      name: 'Guarda'
    },
    {
      value: 9999,
      name: 'Zap'
    },
    {
      value: 9999,
      name: 'Mew'
    },
    {
      value: 9999,
      name: 'Metamask'
    },
    {
      value: 9999,
      name: 'Exodus'
    },
    {
      value: 2715,
      name: 'Edge'
    },
    {
      value: 9999,
      name: 'Blockchain'
    }
  ] as Array<IPieData>;

  return (
    <React.Fragment>
        <PieChart data={data} name='User Wallets' text='User Wallets' />
    </React.Fragment>
  );
}
