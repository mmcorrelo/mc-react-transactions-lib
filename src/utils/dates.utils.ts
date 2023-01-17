import { EDatePeriod } from '../types';

export function getReadableDate(date: string, period: EDatePeriod): string {
  const dateInstance: Date = new Date(date);
  let result = '';

  switch (period) {
    case EDatePeriod.Day:
      result = `${dateInstance.getDate()} / ${getReadableDate(date,EDatePeriod.Month)}`;
    case EDatePeriod.Week:
      const daysOfWeek: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      result = daysOfWeek[dateInstance.getDay()];
      break;
    case EDatePeriod.Month:
      const months: Array<string> = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      result = months[dateInstance.getMonth()];
      break;

    case EDatePeriod.Year:
      result = `${dateInstance.getFullYear()}`;
    default:
      result = '';
  }

  return result;
}
