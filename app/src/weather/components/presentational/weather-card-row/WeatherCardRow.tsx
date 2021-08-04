import React from 'react';

import { Card, Avatar } from 'antd';

import { CurrentWeather } from 'interfaces/weather';

interface Props {
  data: CurrentWeather
}

const WeatherCardRow: React.FC<Props> = ({ data }) => (
  <Card.Grid
    style={{ width: 300 }}
  >
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <h3>{data.name}</h3>
    <p>This is the description</p>
  </Card.Grid>
);

export default WeatherCardRow;
