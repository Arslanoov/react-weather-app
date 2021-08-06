import { CurrentWeather } from 'interfaces/weather';

const data: CurrentWeather = {
  coord: {
    lon: -118.2437,
    lat: 34.0522,
  },
  weather: [
    {
      id: 721,
      main: 'Haze',
      description: 'haze',
      icon: '50n',
    },
  ],
  base: 'stations',
  main: {
    temp: 18.85,
    feels_like: 18.98,
    temp_min: 14.82,
    temp_max: 23.66,
    pressure: 1013,
    humidity: 84,
  },
  visibility: 9656,
  wind: {
    speed: 0,
    deg: 0,
  },
  clouds: {
    all: 90,
  },
  dt: 1628252977,
  sys: {
    type: 1,
    id: 3694,
    country: 'US',
    sunrise: 1628255292,
    sunset: 1628304567,
  },
  timezone: -25200,
  id: 5368361,
  name: 'Los Angeles',
  cod: 200,
};

export default data;
