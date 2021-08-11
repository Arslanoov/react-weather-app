import React from 'react';

import { List } from 'antd';

import { ForecastWeather } from 'interfaces/forecast';

import { datetimeToWeekday } from 'helpers/time';

import WeatherIcon from 'weather/components/presentational/weather-icon';

import './index.scss';

type Props = {
  item: ForecastWeather,
};

const ForecastCardRow: React.FC<Props> = ({ item }) => (
  <List.Item
    className="forecast-card-row"
    key={item.main.temp}
    extra={<WeatherIcon icon={item.weather[0].icon} />}
  >
    <h3 className="forecast-card-row__title">{datetimeToWeekday(item.dt_txt)}</h3>
    <p className="forecast-card-row__temp">
      {Math.floor(item.main.temp)}
      &deg;
    </p>
  </List.Item>
);

export default ForecastCardRow;
