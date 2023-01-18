import { IChartData } from "./charts";

export interface IRequestConfig {
    url: string;
    method?: string;
    headers?: Record<string, unknown> | {};
    body?: Record<string, unknown>;
    signal?: AbortSignal
}

export interface IStatsBreakdownRequest {
    data: IChartData | undefined;
    loading: boolean;
    error: string | undefined;
}