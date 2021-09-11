import React from 'react';

import { mapWeatherIcon } from 'helpers/mapper/weatherIconMapper';

import { WeatherIcon as WeatherIconInterface } from 'interfaces/weather';

import './index.scss';

type Props = {
  className?: string;
  isBig?: boolean;
  icon: WeatherIconInterface;
};

const WeatherIcon: React.FC<Props> = ({
  icon,
  className = '',
  isBig = false,
}) => (
  <div className={`weather-icon ${isBig ? 'weather-icon_big' : ''} ${className}`}>
    <img
      className="weather-icon__item"
      draggable={false}
      src={mapWeatherIcon(icon)}
      alt=""
    />
  </div>
);

export default WeatherIcon;
