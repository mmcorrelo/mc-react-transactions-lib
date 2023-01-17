import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { ILineChartConfiguration } from '../../types';
import { configureLineChart } from '../../utils';

export default function LineChart(props: ILineChartConfiguration) {
    const [option, setOption] = useState({});

    useEffect(() => {
      setOption({ ...(props.option || configureLineChart(props)) });
    }, [props.data, props.text, props.name, props.option, configureLineChart]);

  return (
    <ReactECharts
      option={option}
      style={{ height: '300px', width: '100%' }}
    />
  );
}
