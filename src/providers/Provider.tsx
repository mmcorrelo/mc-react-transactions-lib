import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../store';

export default function ({ children }: any) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
