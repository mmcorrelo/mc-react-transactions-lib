import React, { useEffect, useState } from 'react';
import { Stats, IChartFormFields, EDatePeriod, useAppSelector, formatDate } from 'mc-react-transactions-lib';

import './App.css';

const baseStatsUrl: string = 'https://3.8.126.93/v1';

const defaults: IChartFormFields = {
  period: EDatePeriod.Day,
  startDate: '2021-01-01',
  endDate: '2021-05-01',
  searchableField: 'user_wallet',
  searchableFieldTitle: 'user wallet',
  searchableFieldValue: '',
  nullableField: 'zero_conf_time',
}

const App = () => {
  const trendForm = useAppSelector((state) => state.trend.form);
  const breakdownForm = useAppSelector((state) => state.breakdown.form);
  const percentageForm = useAppSelector((state) => state.percentage.form);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    setLastUpdated(new Date());
  }, [trendForm, breakdownForm, percentageForm]);

  return (
    <>
      <header>CRYPTO TRANSACTIONS STATISTICS</header>
      <main className="container-feed">
        <Stats defaults={defaults} baseUrl={baseStatsUrl} />
      </main >
      <footer>
          Last Update: {formatDate(lastUpdated)}
      </footer>
    </>
  );
};

export default App;
