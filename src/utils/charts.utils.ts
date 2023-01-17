import { EChartsOption } from 'echarts-for-react';
import { IPieConfiguration } from '../types';

export function configurePieChart({ data, name, text }: IPieConfiguration): EChartsOption {
  if (!data) {
    return {};
  }

  return {
    title: {
      top: 20,
      text,
      x: 'center',
      textStyle: {
        fontWeight: 'bolder',
        fontSize: 30
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    series: [
      {
        name,
        type: 'pie',
        radius: ['30%', '65%'],
        data: [...data],
        label: {
          fontSize: 18
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}
