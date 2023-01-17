import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mc-react-transactions-lib/dist/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
