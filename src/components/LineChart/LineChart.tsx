import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

import { ILineChartConfiguration } from '../../types';
import { configureLineChart } from '../../utils';
import ChartSkeleton from '../ChartSkeleton/ChartSkeleton';
import ErrorLoadingChart from '../ErrorLoadingChart/ErrorLoadingChart';
import EmptyChartPlaceholder from '../EmptyChartPlaceholder/EmptyChartPlaceholder';

export default function(props: ILineChartConfiguration) {
    const [option, setOption] = useState({});

    useEffect(() => {
      setOption({ ...(props.option || configureLineChart(props)) });
    }, [props.data, props.text, props.name, props.option, props.period, setOption, configureLineChart]);

  return (
    <React.Fragment>
      { props.loading && <ChartSkeleton height={props.height} /> }
      { props.error && <ErrorLoadingChart height={props.height} message={props.error} /> }
      { !props.error && !props.loading && props.data.length === 0 && <EmptyChartPlaceholder height={props.height} message={props.error} /> }
      { !props.error && !props.loading && props.data.length > 0 && <ReactECharts option={option} style={{ height:props.height, width: '100%' }}/> }
    </React.Fragment>
  );
}
