import React from 'react';
import { Card } from 'antd';

import { CurrentWeather } from 'interfaces/weather';

import WeatherCardRow from 'weather/components/presentational/weather-card-row';

import './index.scss';

interface WeatherCardListProps {
  items: CurrentWeather[]
}

const WeatherCardList: React.FC<WeatherCardListProps> = ({ items }) => (
  <Card>
    {items.map((item) => <WeatherCardRow key={item.id} data={item} />)}
  </Card>
);

export default WeatherCardList;
