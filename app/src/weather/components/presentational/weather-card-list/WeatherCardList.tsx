import React from 'react';
import { Card } from 'antd';

import { CurrentWeather } from 'interfaces/weather';

import WeatherCardRow from 'weather/components/presentational/weather-card-row';

import './index.scss';

type WeatherCardListProps = {
  items: CurrentWeather[],
  onItemDelete: (name: string) => void
};

const WeatherCardList: React.FC<WeatherCardListProps> = ({ items, onItemDelete }) => (
  <Card className="weather-card-list">
    {items.map((item) => (
      <WeatherCardRow
        className="weather-card-list__item"
        key={item.id}
        onDelete={onItemDelete}
        data={item}
      />
    ))}
  </Card>
);

export default WeatherCardList;
