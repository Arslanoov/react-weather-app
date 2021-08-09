import { CurrentWeather } from 'interfaces/weather';

const getTime = (time: number, offset: number) => (new Date((time + offset) * 1000)).toISOString().substr(11, 8);

export const getSunrise = (data: CurrentWeather) => getTime(data.sys.sunrise, data.timezone);

export const getSunset = (data: CurrentWeather) => getTime(data.sys.sunset, data.timezone);
