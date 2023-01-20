import { EDatePeriod } from './dates';

export interface IChartFormCallbackProps {
  onPeriodChange: (event: EDatePeriod) => void;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onSearchableFieldChange: (event: string) => void;
  onNullableFieldChange: (event: string) => void;
}

export interface IChartFormFields {
  period: EDatePeriod;
  startDate: string;
  endDate: string;
  searchableField: string;
  searchableFieldTitle?: string;
  searchableFieldValue?: string;
  nullableField?: string;
}