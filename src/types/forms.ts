import { EDatePeriod } from './dates';

export interface IChartFormCallbackProps {
  onPeriodChange: (event: EDatePeriod, chartId: string) => void;
  onStartDateChange: (value: string, chartId: string) => void;
  onEndDateChange: (value: string, chartId: string) => void;
  onSearchableFieldChange: (event: string, chartId: string) => void;
  onNullableFieldChange: (event: string, chartId: string) => void;
}

export interface IChartFormFields {
  period: EDatePeriod,
  startDate:string
  endDate:string
  searchableField:string
  searchableFieldValue:string
  nullableField:string
}