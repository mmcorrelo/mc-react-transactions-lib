import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';

import { EDatePeriod, ICatalogItem } from '../../../../types';
import { IChartFormCallbackProps } from '../../../../types/forms';

interface Props extends Partial<IChartFormCallbackProps> {
  searchableFields: Array<Partial<ICatalogItem>>;
  nullableFields: Array<Partial<ICatalogItem>>;
}

export default function(props: Partial<Props>) {
  return (
    <React.Fragment>
      {props.onPeriodChange && <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='period'>Period</InputLabel>
        <Select
          labelId='period'
          id='period'
          value={EDatePeriod.Day}
          label='Period'
          onChange={props.onPeriodChange}>
          <MenuItem value={EDatePeriod.Day}>Day</MenuItem>
          <MenuItem value={EDatePeriod.Month}>Month</MenuItem>
          <MenuItem value={EDatePeriod.Week}>Week</MenuItem>
          <MenuItem value={EDatePeriod.Year}>Year</MenuItem>
        </Select>
      </FormControl>}
      {props.onStartDateChange && <DatePicker
        label='Start Date'
        renderInput={(params) => (<TextField size='small' {...params} sx={{ m: 1, maxWidth: 150 }} />)}
        value={'01-01-2021'}
        onChange={props.onStartDateChange}
      />}
      {props.onEndDateChange && <DatePicker
        label='End Date'
        renderInput={(params) => (<TextField size='small' {...params} sx={{ m: 1, maxWidth: 150 }} />)}
        value={'01-06-2021'}
        onChange={props.onEndDateChange}
      />}
      {props.searchableFields && props.onSearchableFieldChange && <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='field'>Field</InputLabel>
        <Select
          labelId='field'
          id='field'
          value={'user_wallet'}
          label='Field'
          onChange={props.onSearchableFieldChange}>
          {props.searchableFields.map((field: Partial<ICatalogItem>)=> <MenuItem key={field.key} value={field.key}>{field.title}</MenuItem>)}
        </Select>
      </FormControl>}
      {props.nullableFields && props.onNullableFieldChange && <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='nullable_field'>Nullable Field</InputLabel>
        <Select
          labelId='nullable_field'
          id='nullable_field'
          value='user_wallet'
          label='Nullable Field'
          onChange={props.onNullableFieldChange}>
          {props.nullableFields.map((field: Partial<ICatalogItem>)=> <MenuItem key={field.key} value={field.key}>{field.title}</MenuItem>)}
        </Select>
      </FormControl>}
    </React.Fragment>
  );
}
