import * as React from 'react';

interface Props {
  weather: {
    id: 300,
    main: string,
    description: string,
    icon: string
  }
}

const WeatherData: React.FunctionComponent<Props> = ({ weather }: Props) => {
  return (
    <div>
      <p>ID: {weather.id}</p>
      <p>Main: {weather.main}</p>
      <p>Description: {weather.description}</p>
      <p>Icon: {weather.icon}</p>
    </div>
  )
};

export default WeatherData;
