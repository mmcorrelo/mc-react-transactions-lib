import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { IPieConfiguration } from '../../types';
import { configurePieChart } from '../../utils';

export function PieChart(props: IPieConfiguration) {
  const configs: EChartsOption = { ...(props.option || configurePieChart(props)) };

  return (
    <React.Fragment>
      <ReactECharts
        option={configs}
        style={{ height: props.height || 600, width: props.width || 'auto' }}
      />
    </React.Fragment>
  );
}
