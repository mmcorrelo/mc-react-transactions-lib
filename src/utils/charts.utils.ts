import { EChartsOption } from 'echarts-for-react';
import { EApiType, IBarChartConfiguration, IChartData, ILineChartConfiguration, ILineChartData, IPieChartConfiguration } from '../types';
import { getReadableDate } from './dates.utils';

export function configurePieChart({ data, text, apiType }: IPieChartConfiguration): EChartsOption {
  let computedData: Array<IChartData> = [];

  if (!data) {
    return {};
  }

  switch(apiType) {
    case EApiType.Percentage:
      computedData = data.map((d: any) => ({ name:d.value, value: d.avg }) as any);
      break;
    case EApiType.Breakdown:
      computedData = data.map((d: any) => ({ name:d.name, value: d.value }) as any);
      break;
    case EApiType.Trend:
      computedData = data.map((d:any) => ({ name:d.name, value: d.value }) as any);
      break;
  }

  return {
    title: {
      top: 20,
      botton: 0,
      text,
      x: 'center',
      textStyle: {
        fontWeight: 'bolder',
        fontFamily: 'Arial'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    series: [{
      type: 'pie',
      radius: ['30%', '65%'],
      label: {
        fontSize: 18
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      data: computedData
    }]
  };
}

export function configureLineChart({ data, text, period }: ILineChartConfiguration): EChartsOption {
  const { dates, series }: { dates: string[]; series: Array<any>; } = computeLineChartData(data);

  return {
    title: {
      text,
      x: 'left',
      textStyle: {
        fontWeight: 'bolder',
        fontFamily: 'Arial'
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
}

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
};

export function configureBarChart({ data, text, apiType }: IBarChartConfiguration): EChartsOption {
  let computedData: Array<Array<number | string>> = [];

  switch(apiType) {
    case EApiType.Percentage:
      computedData = data.map((d: any) => Object.values({ name:d.value, value: +d.avg }));
      break;
    case EApiType.Breakdown:
      computedData = data.map((d: any) => Object.values({ name:d.name, value: +d.value }));
      break;
    case EApiType.Trend:
      computedData = data.map((d:any) => Object.values({ name:d.name, value: +d.value }));
      break;
  }
  
  return {
    title: {
      text,
      top: 20,
      x: 'left',
      textStyle: {
        fontWeight: 'bolder',
        fontFamily: 'Arial'
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
    xAxis: [{
      name: 'value',
      axisLabel: {
        fontWeight: 'bolder'
      }
    }],
    yAxis: [{
      type: 'category',
      axisLabel: {
        fontWeight: 'bold'
      }
    }],
    series: [{
      type: 'bar',
      encode: {
        x: 'value',
        y: 'name'
      }
    }],
    dataset: { 
      source: [['name', 'value'], ...computedData]
    }
  };
}