import React from 'react';
import { Card, Empty } from 'antd';

import { CurrentWeather } from 'interfaces/weather';

import WeatherCardRow from 'weather/components/presentational/weather-card-row';

import './index.scss';

type WeatherCardListProps = {
  items: CurrentWeather[];
  onItemDelete: (name: string) => void;
  isBigIcon?: boolean;
};

const WeatherCardList: React.FC<WeatherCardListProps> = ({
  items,
  onItemDelete,
  isBigIcon = false,
}) => (
  <Card className="weather-card-list">
    {items.map((item) => (
      <WeatherCardRow
        className="weather-card-list__item"
        key={item.id}
        onDelete={onItemDelete}
        data={item}
        isBigIcon={isBigIcon}
        withActions
      />
    ))}
    {items.length === 0 ? <Empty /> : ''}
  </Card>
);

export default WeatherCardList;
