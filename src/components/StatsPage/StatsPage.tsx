import React from 'react';
import { EDatePeriod, IChartData, ILineChartData } from '../../types';
import LineChart from '../LineChart/LineChart';
import PieChart from '../PieChart/PieChart';

export default function StatsPage() {
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
  ] as Array<IChartData>;

  const data2: Array<ILineChartData> = [
    {
      name: 'USDT-ERC20',
      value: 1261,
      date: '2021-05-01T00:00:00.000Z'
    },
    {
      name: 'DOGE',
      value: 7453,
      date: '2021-04-01T00:00:00.000Z'
    },
    {
      name: 'Lightning',
      value: 9999,
      date: '2021-04-01T00:00:00.000Z'
    },
    {
      name: 'USDT-ERC20',
      value: 6347,
      date: '2021-04-01T00:00:00.000Z'
    },
    {
      name: 'USTD-TRC20',
      value: 9999,
      date: '2021-04-01T00:00:00.000Z'
    },
    {
      name: 'x',
      value: 3,
      date: '2021-04-01T00:00:00.000Z'
    },
    {
      name: 'BTC',
      value: 28128,
      date: '2021-03-01T00:00:00.000Z'
    },
    {
      name: 'DOGE',
      value: 2546,
      date: '2021-03-01T00:00:00.000Z'
    },
    {
      name: 'ETH',
      value: 9999,
      date: '2021-03-01T00:00:00.000Z'
    },
    {
      name: 'x',
      value: 4,
      date: '2021-03-01T00:00:00.000Z'
    },
    {
      name: 'BTC',
      value: 1869,
      date: '2021-02-01T00:00:00.000Z'
    },
    {
      name: 'Lightning',
      value: 9999,
      date: '2021-02-01T00:00:00.000Z'
    },
    {
      name: 'USDT-ERC20',
      value: 2714,
      date: '2021-02-01T00:00:00.000Z'
    },
    {
      name: 'x',
      value: 10002,
      date: '2021-02-01T00:00:00.000Z'
    },
    {
      name: 'USDT-ERC20',
      value: 1,
      date: '2021-01-01T00:00:00.000Z'
    }
  ];

  const data4: Array<ILineChartData> = [
    {
      name: 'USDT-ERC20',
      value: 1261,
      date: '2021-05-01T00:00:00.000Z'
    },
    {
      name: 'USDT-ERC20',
      value: 6347,
      date: '2021-05-02T00:00:00.000Z'
    },
    {
      name: 'USDT-ERC20',
      value: 2714,
      date: '2021-05-04T00:00:00.000Z'
    },
    {
      name: 'USDT-ERC20',
      value: 1,
      date: '2021-05-05T00:00:00.000Z'
    }
  ];


  return (
    <main className='container'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 mt-4'>
            <LineChart data={data2} period={EDatePeriod.Month} name='User Wallets' text='User Wallets'/>
          </div>
          <div className='col-xs-12 mt-4'>
            <PieChart data={data} name='User Wallets' text='User Wallets' />
          </div>
          <div className='col-xs-12 mt-4'>
            <LineChart data={data4} period={EDatePeriod.Week} name='User Wallets' text='User Wallets'/>
          </div>
          <div className='col-xs-12 mt-4'>
            <LineChart data={data2} period={EDatePeriod.Month} name='User Wallets' text='User Wallets'/>
          </div>
          <div className='col-xs-12 mt-4'>
            <LineChart data={data2} period={EDatePeriod.Month} name='User Wallets' text='User Wallets'/>
          </div>
        </div>
      </div>
    </main>
  );
}
