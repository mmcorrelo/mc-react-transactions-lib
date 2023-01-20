import { EDatePeriod } from '../types';

export function getReadableDate(date: string, period: EDatePeriod): string {
  const dateInstance: Date = new Date(date);
  let result = '';

  switch (period) {
    case EDatePeriod.Day:
      result = `${dateInstance.getDate()}/${getReadableDate(date, EDatePeriod.Month)}`;
      break;
    case EDatePeriod.Week:
      result = dateInstance.toLocaleDateString();
      break;
    case EDatePeriod.Month:
      const months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      result = months[dateInstance.getMonth()];
      break;
    case EDatePeriod.Year:
      result = `${dateInstance.getFullYear()}`;
      break;
    default:
      result = '';
      break;
  }

  return result;
}

export function formatDate(date: Date): string {
  const isoString = date.toISOString();
  const formattedDate = isoString.substring(0, isoString.indexOf(".")).replace("T", " ");

  return formattedDate;

};
