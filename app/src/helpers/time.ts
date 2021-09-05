import { CurrentWeather } from 'interfaces/weather';

import { daysOfTheWeek } from 'const/week';

export const getTime = (time: number, offset: number) => (new Date((time + offset) * 1000)).toISOString().substr(11, 5);

export const getSunrise = (data: CurrentWeather) => getTime(data.sys.sunrise, data.timezone);

export const getSunset = (data: CurrentWeather) => getTime(data.sys.sunset, data.timezone);

export const formatDateValue = (value: number): string => (value < 10 ? `0${value}` : `${value}`);

// TODO: Add tests
export const datetimeToDate = (datetime: string): string => {
  const date = new Date(datetime);
  return `${formatDateValue(date.getDate())}.${formatDateValue(date.getMonth())}.${date.getFullYear()}`;
};

export const datetimeToWeekday = (datetime: string): string => daysOfTheWeek[(new Date(datetime)).getDay()];
