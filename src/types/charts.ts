import { EChartsOption } from 'echarts-for-react';
import { EDatePeriod } from './dates';
import { EApiType } from './request';

export enum EMCChartNames {
  All = 'All',
  TrendChart = 'TrendChart',
  BreakdownChart = 'BreakdownChart',
  PercentageChart = 'PercentageChart'
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

export interface IPieChartData {
  value: string;
  count: string;
  avg: string;
  total: string;
}

export interface IBarChartData extends IChartData { }

export interface IBaseChartConfiguration {
  loading: boolean;
  error: string | undefined;
  text?: string;
  subtext?: string;
  data: Array<any>;
  name: string;
  option?: EChartsOption;
  height?: string;
  width?: string;
}

export interface IPieChartConfiguration extends IBaseChartConfiguration {
  apiType: EApiType;
}

export interface ILineChartConfiguration extends IBaseChartConfiguration {
  period: EDatePeriod;

}
export interface IBarChartConfiguration extends IBaseChartConfiguration {
  apiType: EApiType;
}


