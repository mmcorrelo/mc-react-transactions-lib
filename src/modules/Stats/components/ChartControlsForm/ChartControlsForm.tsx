import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';

import { EDatePeriod, ICatalogItem } from '../../../../types';
import { IChartFormCallbackProps, IChartFormFields } from '../../../../types/forms';
import { Grid, SelectChangeEvent } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

interface Props extends Partial<IChartFormCallbackProps>, IChartFormFields {
  chartId: string;
  searchableFields: Array<Partial<ICatalogItem>>;
  nullableFields: Array<Partial<ICatalogItem>>;
}

export default function (props: Props) {
  const [period, setPeriod] = useState(props.period);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const [searchableField, setSearchableField] = useState(props.searchableField);
  const [nullableField, setNullableField] = useState(props.nullableField);

  const handlePeriodChange = (event: SelectChangeEvent<EDatePeriod>) => {
    const value: EDatePeriod = event.target.value as EDatePeriod;

    setPeriod(value);
    props.onPeriodChange!(value, props.chartId!);
  };

  const handleStartDateChange = (event: Dayjs) => {
    const value: string = event.format('YYYY-MM-DD');

    setStartDate(value);
    props.onStartDateChange!(value, props.chartId!);
  };

  const handleEndDateChange = (event: Dayjs) => {
    const value: string = event.format('YYYY-MM-DD');

    setEndDate(value);
    props.onEndDateChange!(value, props.chartId!);
  };

  const handleSearchableFieldChange = (event: SelectChangeEvent<string>) => {
    const value: string = event.target.value as string;

    setSearchableField(value);
    props.onSearchableFieldChange!(value, props.chartId!);
  };

  const handleNullableFieldChange = (event: SelectChangeEvent<string>) => {
    const value: string = event.target.value as string;

    setNullableField(value);
    props.onNullableFieldChange!(value, props.chartId!);
  };

  return (
    <Grid container spacing={2}>
        {props.onStartDateChange && (<Grid item xs={4}>
          <DatePicker
            label='Start Date'
            renderInput={(params) => (
              <TextField size='small' {...params} sx={{ width: '100%' }} />
            )}
            maxDate={dayjs(new Date(endDate))}
            value={startDate}
            onChange={handleStartDateChange}
          />
        </Grid> )}
        {props.onEndDateChange && (<Grid item xs={4}>
          <DatePicker
            label='End Date'
            minDate={dayjs(new Date(startDate))}
            renderInput={(params) => (
              <TextField size='small' {...params} sx={{  width: '100%' }} />
            )}
            value={endDate}
            onChange={handleEndDateChange}
          />
        </Grid>)}
        {props.onPeriodChange && (<Grid item xs={4}>
          <FormControl sx={{ width: '100%' }} size='small'>
            <InputLabel id='period'>Period</InputLabel>
            <Select
              labelId='period'
              id='period'
              value={period}
              label='Period'
              onChange={handlePeriodChange}>
              <MenuItem value={EDatePeriod.Day}>Day</MenuItem>
              <MenuItem value={EDatePeriod.Month}>Month</MenuItem>
              <MenuItem value={EDatePeriod.Week}>Week</MenuItem>
              <MenuItem value={EDatePeriod.Year}>Year</MenuItem>
            </Select>
          </FormControl>
        </Grid>)}
        {props.searchableFields && props.onSearchableFieldChange && (<Grid item xs={4}>
          <FormControl sx={{ width: '100%' }} size='small'>
            <InputLabel id='field'>Field</InputLabel>
            <Select
              labelId='field'
              id='field'
              value={searchableField}
              label='Field'
              onChange={handleSearchableFieldChange}>
              {props.searchableFields.map((field: Partial<ICatalogItem>) => (
                <MenuItem key={field.key} value={field.key}>
                  {field.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>)}
        {props.nullableFields && props.onNullableFieldChange && (<Grid item xs={4}>
          <FormControl sx={{ width: '100%' }} size='small'>
            <InputLabel id='nullable_field'>Nullable Field</InputLabel>
            <Select
              labelId='nullable_field'
              id='nullable_field'
              value={nullableField}
              label='Nullable Field'
              onChange={handleNullableFieldChange}>
              {props.nullableFields.map((field: Partial<ICatalogItem>) => (
                <MenuItem key={field.key} value={field.key}>
                  {field.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>)}
    </Grid>
  );
}
