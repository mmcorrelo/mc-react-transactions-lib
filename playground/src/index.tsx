import React from 'react';
import ReactDOM from 'react-dom/client';
import { StatsProvider } from 'mc-react-transactions-lib';

import App from './App';
import './index.css';
import 'mc-react-transactions-lib/dist/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
    <StatsProvider>
        <App />
    </StatsProvider>
);
