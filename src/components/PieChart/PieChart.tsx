import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { IPieChartConfiguration } from '../../types';
import { configurePieChart } from '../../utils';

export default function PieChart(props: IPieChartConfiguration) {
  const [option, setOption] = useState({});

  useEffect(() => {
    setOption({ ...(props.option || configurePieChart(props)) });
  }, [props.data, props.text, props.name, props.option, configurePieChart]);

  return (
    <ReactECharts
      option={option}
      style={{ height: props.height || 600, width: props.width || 'auto' }}
    />
  );
}
