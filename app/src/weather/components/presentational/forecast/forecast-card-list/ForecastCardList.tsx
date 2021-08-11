import React from 'react';

import { List } from 'antd';

import { Forecast, ForecastWeather } from 'interfaces/forecast';

import ForecastCardRow from 'weather/components/presentational/forecast/forecast-card-row';

type Props = {
  forecast: Forecast,
};

const ForecastCardList: React.FC<Props> = ({ forecast }) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={false}
    dataSource={forecast.list}
    renderItem={(item: ForecastWeather) => (
      <>
        <hr />
        <ForecastCardRow item={item} />
      </>
    )}
  />
);

export default ForecastCardList;
