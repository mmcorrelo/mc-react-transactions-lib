# mc-react-transactions-lib

> The `mc-react-transactions-lib` is a frontend library for managing crypto transactions. This library allows you to easily handle crypto transactions in your React applications, providing a set of components and functions to perform common crypto-related operations.


[![NPM](https://img.shields.io/npm/v/mc-react-transactions-lib.svg)](https://www.npmjs.com/package/mc-react-transactions-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

To install the library in an external project, run `npm install --save mc-react-transactions-lib` in the project's terminal.

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

```tsx
import React, { Component } from 'react';
import { StatsPage } from 'mc-react-transactions-lib';

const url = '...';

function Example() {
  return (<StatsPageContainer url={ url } />);
}
```

## License

Apache License 2.0 © 2022 [Miguel Correlo](https://github.com/mmcorrelo).

This project is [Apache License 2.0](https://github.com/mmcorrelo/mc-reat-transactions-lib/blob/main/LICENSE) licensed.
