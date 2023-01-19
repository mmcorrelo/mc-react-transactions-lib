import { EChartsOption } from 'echarts-for-react';
import { EDatePeriod } from './dates';

export enum EMCChartNames {
  All = 'All',
  ChartOne = 'ChartOne',
  ChartTwo = 'ChartTwo',
  ChartThree = 'ChartThree',
  ChartFour = 'ChartFour',
  ChartFive = 'ChartFive',
  ChartSix = 'ChartSix',
  ChartSeven = 'ChartSeven',
}

export enum EChartType {
  Breakdown = 0,
  Trend,
  Percentage
}

export interface IChartData {
  value: number;
  name: string;
}

export interface ILineChartData extends IChartData {
  date: string;
}

export interface IPieChartConfiguration {
  loading: boolean;
  error: string | undefined;
  text?: string;
  subtext?: string;
  name: string;
  data: Array<IChartData>;
  option?: EChartsOption;
  height?: number | string;
  width?: number | string;
}

export interface ILineChartConfiguration extends IPieChartConfiguration {
  period: EDatePeriod;
  data: Array<ILineChartData>;
}


