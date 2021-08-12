import React from 'react';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import { List } from 'antd';

import { Forecast, ForecastWeather } from 'interfaces/forecast';

import ForecastCardRow from 'weather/components/presentational/forecast/forecast-card-row';

type Props = {
  forecast: Forecast,
};

const ForecastCardList: React.FC<Props> = ({ forecast }) => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={false}
      dataSource={forecast.list}
      renderItem={(item: ForecastWeather) => (
        <>
          {currentTheme === 'light' && <hr />}
          <ForecastCardRow item={item} />
        </>
      )}
    />
  );
};

export default ForecastCardList;
