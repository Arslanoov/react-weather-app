import React from 'react';
import { Card } from 'antd';

import { CurrentWeather } from 'interfaces/weather';

import WeatherCardRow from 'weather/components/presentational/weather-card-row';

import './index.scss';

type WeatherCardListProps = {
  items: CurrentWeather[]
};

const WeatherCardList: React.FC<WeatherCardListProps> = ({ items }) => (
  <Card className="weather-card-list">
    {items.map((item) => <WeatherCardRow className="weather-card-list__item" key={item.id} data={item} />)}
  </Card>
);

export default WeatherCardList;
