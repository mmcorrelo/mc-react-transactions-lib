import React from 'react';
import { StatsProvider, Stats, IChartFormFields, EDatePeriod } from 'mc-react-transactions-lib';

import './App.css';

const baseStatsUrl: string = 'http:///localhost:6060/v1/stats';

const defaults: IChartFormFields = {
  period: EDatePeriod.Day,
  startDate: '2021-01-01',
  endDate: '2021-05-01',
  searchableField: 'user_wallet',
  searchableFieldValue: 'Mew',
  nullableField: 'zero_conf_time',
}

const App = () => {
  return (
    <StatsProvider>
      <header>CRYPTO TRANSACTIONS STATISTICS</header>
      <main>
        <Stats defaults={defaults} baseUrl={baseStatsUrl}/>
      </main>
    </StatsProvider>
  );
};

export default App;
