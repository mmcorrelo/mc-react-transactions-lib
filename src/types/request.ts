import { IBarChartData, ILineChartData, IPieChartData } from './charts';

export enum EApiType {
  Breakdown = 0,
  Trend,
  Percentage
}

export interface IRequestConfig {
  url: string;
  method?: string;
  headers?: Record<string, unknown> | {};
  body?: Record<string, unknown>;
  signal?: AbortSignal;
}

export interface IStatsBreakdownRequest {
  data: Array<IBarChartData>;
  loading: boolean;
  error: string | undefined;
}

export interface IStatsTrendRequest {
  data: Array<ILineChartData>;
  loading: boolean;
  error: string | undefined;
}

export interface IStatsPercentageRequest {
  data: Array<IPieChartData>;
  loading: boolean;
  error: string | undefined;
}

export interface ICatalogItem {
  key: string;
  title: string;
  nullable: boolean;
  searchable: boolean;
  type: string;
}
