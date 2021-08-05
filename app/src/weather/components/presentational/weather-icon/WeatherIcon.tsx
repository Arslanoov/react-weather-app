import React from 'react';

import { mapWeatherIcon } from 'helpers/mapper/weatherIconMapper';

import { WeatherIcon as WeatherIconInterface } from 'interfaces/weather';

import './index.scss';

type Props = {
  icon: WeatherIconInterface;
  className?: string;
};

const WeatherIcon: React.FC<Props> = ({ icon, className }) => (
  <div className={`weather-icon ${className ?? ''}`}>
    <img className="weather-icon__item" src={mapWeatherIcon(icon)} alt="" />
  </div>
);

export default WeatherIcon;
