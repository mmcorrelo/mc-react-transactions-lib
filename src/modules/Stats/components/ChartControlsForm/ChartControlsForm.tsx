import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';

import { EDatePeriod, ICatalogItem } from '../../../../types';
import { IChartFormCallbackProps } from '../../../../types/forms';
import { SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';

interface Props extends Partial<IChartFormCallbackProps> {
  searchableFields: Array<Partial<ICatalogItem>>;
  nullableFields: Array<Partial<ICatalogItem>>;
}

export default function (props: Partial<Props>) {
  const [period, setPeriod] = useState(EDatePeriod.Day);
  const [startDate, setStartDate] = useState('2021-01-01');
  const [endDate, setEndDate] = useState('2021-05-01');
  const [searchableField, setSearchableField] = useState('user_wallet');
  const [nullableField, setNullableField] = useState('method_payment');

  const handlePeriodChange = (event: SelectChangeEvent<EDatePeriod>) => {
    const value: EDatePeriod = event.target.value as EDatePeriod;

    setPeriod(value);
    props.onPeriodChange!(value);
  };

  const handleStartDateChange = (event: Dayjs) => {
    const value: string = event.format('YYYY-MM-DD');

    setStartDate(value);
    props.onStartDateChange!(value);
  };

  const handleEndDateChange = (event: Dayjs) => {
    const value: string = event.format('YYYY-MM-DD');

    setEndDate(value);
    props.onEndDateChange!(value);
  };

  const handleSearchableFieldChange = (event: SelectChangeEvent<string>) => {
    const value: string = event.target.value as string;

    setSearchableField(value);
    props.onSearchableFieldChange!(value);
  };

  const handleNullableFieldChange = (event: SelectChangeEvent<string>) => {
    const value: string = event.target.value as string;

    setNullableField(value);
    props.onNullableFieldChange!(value);
  };

  return (
    <React.Fragment>
      {props.onPeriodChange && (
        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
          <InputLabel id='period'>Period</InputLabel>
          <Select
            labelId='period'
            id='period'
            value={period}
            label='Period'
            onChange={handlePeriodChange}
          >
            <MenuItem value={EDatePeriod.Day}>Day</MenuItem>
            <MenuItem value={EDatePeriod.Month}>Month</MenuItem>
            <MenuItem value={EDatePeriod.Week}>Week</MenuItem>
            <MenuItem value={EDatePeriod.Year}>Year</MenuItem>
          </Select>
        </FormControl>
      )}
      {props.onStartDateChange && (
        <DatePicker
          label='Start Date'
          renderInput={(params) => (
            <TextField size='small' {...params} sx={{ m: 1, maxWidth: 150 }} />
          )}
          value={startDate}
          onChange={handleStartDateChange}
        />
      )}
      {props.onEndDateChange && (
        <DatePicker
          label='End Date'
          renderInput={(params) => (
            <TextField size='small' {...params} sx={{ m: 1, maxWidth: 150 }} />
          )}
          value={endDate}
          onChange={handleEndDateChange}
        />
      )}
      {props.searchableFields && props.onSearchableFieldChange && (
        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
          <InputLabel id='field'>Field</InputLabel>
          <Select
            labelId='field'
            id='field'
            value={searchableField}
            label='Field'
            onChange={handleSearchableFieldChange}
          >
            {props.searchableFields.map((field: Partial<ICatalogItem>) => (
              <MenuItem key={field.key} value={field.key}>
                {field.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {props.nullableFields && props.onNullableFieldChange && (
        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
          <InputLabel id='nullable_field'>Nullable Field</InputLabel>
          <Select
            labelId='nullable_field'
            id='nullable_field'
            value={nullableField}
            label='Nullable Field'
            onChange={handleNullableFieldChange}
          >
            {props.nullableFields.map((field: Partial<ICatalogItem>) => (
              <MenuItem key={field.key} value={field.key}>
                {field.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </React.Fragment>
  );
}
