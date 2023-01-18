import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

import { IPieChartConfiguration } from '../../types';
import { configurePieChart } from '../../utils';
import ChartSkeleton from '../ChartSkeleton/ChartSkeleton';
import ErrorLoadingChart from '../ErrorLoadingChart/ErrorLoadingChart';

export default function PieChart(props: IPieChartConfiguration) {
  const [option, setOption] = useState({});

  useEffect(() => {
    setOption({ ...(props.option || configurePieChart(props)) });
  }, [props.data, props.text, props.name, props.option, setOption, configurePieChart]);

  return (
    <React.Fragment>
    { props.loading && <ChartSkeleton /> }
    { props.error && <ErrorLoadingChart message={props.error} /> }
    { !props.error && !props.loading && <ReactECharts option={option} style={{ height: props.height || 600, width: props.width || 'auto' }}/>}
    </React.Fragment>
  );
}