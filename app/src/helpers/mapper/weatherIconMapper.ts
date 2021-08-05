import { WeatherIcon } from 'interfaces/weather';

export const mapWeatherIcon = (icon: WeatherIcon): string => {
  const baseUrl = '/img/icons/weather/';
  let name: string;

  switch (icon) {
    case '01d':
      name = 'Sun';
      break;
    case '02d':
      name = 'Cloud_Sun';
      break;
    case '03d':
      name = 'Cloud';
      break;
    case '04d':
      name = 'Cloud';
      break;
    case '09d':
      name = 'Rain_Medium';
      break;
    case '10d':
      name = 'Rain_Medium_Sun';
      break;
    case '11d':
      name = 'Thunder';
      break;
    case '13d':
      name = 'Snow_1_Sun';
      break;
    case '50d':
      name = 'Fog';
      break;

    case '01n':
      name = 'Moon';
      break;
    case '02n':
      name = 'Cloud_Moon';
      break;
    case '03n':
      name = 'Cloud';
      break;
    case '04n':
      name = 'Cloud';
      break;
    case '09n':
      name = 'Rain_Medium';
      break;
    case '10n':
      name = 'Rain_Medium_Moon';
      break;
    case '11n':
      name = 'Thunderstorm';
      break;
    case '13n':
      name = 'Snow_1_Moon';
      break;
    case '50n':
      name = 'Fog';
      break;
    default:
      name = '';
  }

  return `${baseUrl + name}.svg`;
};
