import React from 'react';
import { StatsPageContainer, StatsProvider } from 'mc-react-transactions-lib';

const App = () => {
  return (
    <StatsProvider>
      <StatsPageContainer />
    </StatsProvider>
  );
};

export default App;
