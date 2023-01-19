import React from 'react';
import { StatsProvider, Stats } from 'mc-react-transactions-lib';

const App = () => {
  return (
    <StatsProvider>
      <Stats />
    </StatsProvider>
  );
};

export default App;
