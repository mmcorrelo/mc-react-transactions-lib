import { EChartsOption } from 'echarts-for-react';
import { ILineChartConfiguration, ILineChartData, IPieChartConfiguration } from '../types';
import { getReadableDate } from './dates.utils';

export function configurePieChart({ data, name, text }: IPieChartConfiguration): EChartsOption {
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

export function configureLineChart({ data, text, period }: ILineChartConfiguration): EChartsOption {
  const { dates, series }: { dates: string[]; series: Array<any>; } = computeLineChartData(data);

  return {
    title: {
      text,
      x: 'center',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 28
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      top: '70px',
      left: '3%',
      right: '4%',
      bottom: '2%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: dates.map((d: string) => getReadableDate(d, period)),
        axisLabel: {
          fontWeight: 'bolder'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          fontWeight: 'bold'
        }
      }
    ],
    series: [...series]
  };

  function computeLineChartData(data: Array<ILineChartData>) {
    const groupedData: Record<string, Record<string, number>> = data.reduce((result: Record<string, Record<string, number>>, item: ILineChartData) => {
      if (!result[item.name]) {
        result[item.name] = {};
      }

      result[item.name][item.date] = item.value;
      return result;
    }, {});

    const names: Array<string> = Object.keys(groupedData);
    const dates = Array.from(new Set(data.map((item: ILineChartData) => item.date))).sort();
    const series = names.map((name: string) => ({
      name,
      type: 'line',
      smooth: true,
      data: dates.map((date: string) => ({ date, value: groupedData[name][date] || 0 }))
    }));

    return { names, dates, series };
  }
}