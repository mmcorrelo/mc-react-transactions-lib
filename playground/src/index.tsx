import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;

//ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(container);


//ReactDOM.render(<App />, container);

root.render(<App />)
