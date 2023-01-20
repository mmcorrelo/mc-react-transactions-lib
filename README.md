# mc-react-transactions-lib

> The `mc-react-transactions-lib` is a frontend library for managing crypto transactions. This library allows you to easily handle crypto transactions in your React applications, providing a set of components and functions to perform common crypto-related operations.


[![NPM](https://img.shields.io/npm/v/mc-react-transactions-lib.svg)](https://www.npmjs.com/package/mc-react-transactions-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

To install the library in an external project, run `npm install --save mc-react-transactions-lib` in the project's terminal. 

<b>Disclamer: the library is not publish on the npm yet. Use the playground project to play it it</b>

```bash
npm install --save mc-react-transactions-lib
```

## Usage

To develop new components in the library, we need to run the library in watch mode so that it can be continuously compiled as changes are made.

```bash
npm run start
```

To begin developing a React library, it is important to set up a playground project. The playground project serves as a development environment where you can import and test your library. This allows you to see how the library behaves and make any necessary adjustments before publishing it. Additionally, you can use the playground project to test your library with different configurations and use cases, which can help to ensure that it is fully functional and reliable.

```bash
npm run predeploy
```

## Integration Example

To integrate `mc-react-transactions-lib` into a project, you can follow these steps:


```shell
npm install mc-react-transactions-lib
```

Import the Stats component and necessary types from the library:

```tsx
import { Stats, IChartFormFields, EDatePeriod } from 'mc-react-transactions-lib';
```

Create the default values for the form fields and the base url for the API that the library will consume

```tsx
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
```

Use the `Stats` component in your JSX and pass in the required props such as `defaults, baseUrl`

```tsx
<Stats defaults={defaults} baseUrl={baseStatsUrl} />
```

Full example

```tsx
import React, { Component } from 'react';
import { StatsPage } from 'mc-react-transactions-lib';

const url = '...';

function Example() {
  return (<Stats defaults={defaults} baseUrl={baseStatsUrl} />);
}
```


To have more flexibility with data provider and chart rendering, you can import the redux hooks and start a custom integration. This will allow you to use different APIs and display the charts in a way that fits your specific needs. This will give you more control over the data and presentation of the charts. The steps below is an example of how to do it.

Import the useAppSelector hook to get the value of the form fields and the formatDate helper to format the date.

```tsx
const trendForm = useAppSelector((state) => state.trend.form);
const breakdownForm = useAppSelector((state) => state.breakdown.form);
const percentageForm = useApp 
```

Using the redux hooks

```tsx
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
```

## Demo

To get a better understanding of the full capabilities of the library, check the live demo at https://mc-transactions.web.app/. This demo showcases the various chart types and data visualization options available, giving you a glimpse of the possibilities for displaying the crypto transaction data. Experiment with the demo and check how the library can be adapted to suit different use cases.


## License

Apache License 2.0 © 2022 [Miguel Correlo](https://github.com/mmcorrelo).

This project is [Apache License 2.0](https://github.com/mmcorrelo/mc-reat-transactions-lib/blob/main/LICENSE) licensed.
