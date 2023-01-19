import { SelectChangeEvent } from '@mui/material';
import { EDatePeriod } from './dates';

export interface IChartFormCallbackProps {
  onPeriodChange: (event: SelectChangeEvent<EDatePeriod>) => void;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onSearchableFieldChange: (event: SelectChangeEvent<string>) => void;
  onNullableFieldChange: (event: SelectChangeEvent<string>) => void;
}
