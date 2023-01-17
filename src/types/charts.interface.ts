import { EChartsOption } from 'echarts-for-react'

export interface IPieData {
  value: number;
  name: string;
}

export interface IPieConfiguration {
  text?: string;
  subtext?: string;
  name: string;
  data: Array<IPieData>;
  option?: EChartsOption;
  height?: number | string;
  width?: number | string;
}
