import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

import { ILineChartConfiguration } from '../../types';
import { configureLineChart } from '../../utils';
import ChartSkeleton from '../ChartSkeleton/ChartSkeleton';
import ErrorLoadingChart from '../ErrorLoadingChart/ErrorLoadingChart';

export default function(props: ILineChartConfiguration) {
    const [option, setOption] = useState({});

    useEffect(() => {
      setOption({ ...(props.option || configureLineChart(props)) });
    }, [props.data, props.text, props.name, props.option, setOption, configureLineChart]);

  return (
    <React.Fragment>
      { props.loading && <ChartSkeleton height={props.height} /> }
      { props.error && <ErrorLoadingChart height={props.height} message={props.error} /> }
      { !props.error && !props.loading && <ReactECharts option={option} style={{ height:props.height, width: '100%' }}/> }
    </React.Fragment>
  );
}
