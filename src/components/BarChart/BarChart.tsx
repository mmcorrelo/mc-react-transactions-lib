import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

import { IBarChartConfiguration } from '../../types';
import { configureBarChart } from '../../utils';
import ChartSkeleton from '../ChartSkeleton/ChartSkeleton';
import EmptyChartPlaceholder from '../EmptyChartPlaceholder/EmptyChartPlaceholder';
import ErrorLoadingChart from '../ErrorLoadingChart/ErrorLoadingChart';


interface Props extends IBarChartConfiguration { }

export default function(props: Props) {
    const [option, setOption] = useState({});
console.log(option)
    useEffect(() => {
      setOption({ ...(props.option || configureBarChart(props)) });
    }, [props.data, props.text, props.name, props.option, setOption, configureBarChart]);

  return (
    <React.Fragment>
      { props.loading && <ChartSkeleton height={props.height} /> }
      { props.error && <ErrorLoadingChart height={props.height} message={props.error} /> }
      { !props.error && !props.loading && props.data.length === 0 && <EmptyChartPlaceholder height={props.height} message={props.error} /> }
      { !props.error && !props.loading && props.data.length > 0 && <ReactECharts option={option} style={{ height: props.height, width: '100%' }}/> }
    </React.Fragment>
  );
}
