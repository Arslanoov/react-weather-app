import React from 'react';

import { Card } from 'antd';

import { CurrentWeather } from 'interfaces/weather';

import WeatherIcon from 'weather/components/presentational/weather-icon';

import './index.scss';

type Props = {
  data: CurrentWeather;
  className?: string;
};

const WeatherCardRow: React.FC<Props> = ({ data, className }) => (
  <Card.Grid className={`weather-card-row ${className}`}>
    <WeatherIcon className="weather-card-row__icon" icon={data.weather[0].icon} />
    <div className="weather-card-row__content">
      <h3 className="weather-card-row__city">{data.name}</h3>
      <p className="weather-card-row__description">This is the description</p>
    </div>
  </Card.Grid>
);

export default WeatherCardRow;
