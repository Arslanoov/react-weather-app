import React from 'react';
import { NavLink } from 'react-router-dom';

import { Card } from 'antd';
import { CloseOutlined, PlusOutlined, AppstoreOutlined } from '@ant-design/icons';

import { CurrentWeather } from 'interfaces/weather';

import { getSunrise, getSunset } from 'helpers/time';

import WeatherIcon from 'weather/components/presentational/weather-icon';

import './index.scss';

type Props = {
  data: CurrentWeather;
  onAdd?: (name: string) => void;
  onDelete?: (name: string) => void;
  canAdd?: boolean;
  canDelete?: boolean;
  className?: string;
  extended?: boolean;
  withActions?: boolean;
  detailed?: boolean;
};

const WeatherCardRow: React.FC<Props> = ({
  data,
  onAdd,
  onDelete,
  className,
  canAdd = false,
  canDelete = true,
  extended = false,
  withActions = true,
  detailed = false,
}) => (
  <Card.Grid className={`weather-card-row ${className}`}>
    {
      canDelete
      && onDelete
      && <CloseOutlined className="weather-card-row__delete" onClick={() => onDelete(data.name)} />
    }
    {extended}
    <WeatherIcon className="weather-card-row__icon" icon={data.weather[0].icon} />
    <div className="weather-card-row__content">
      <div className="weather-card-row__left">
        <h3 className="weather-card-row__city">{data.name}</h3>
        <p className="weather-card-row__coord">
          {data.coord.lon}
          {' '}
          {data.coord.lat}
        </p>
        <p className="weather-card-row__description">
          Feels like
          {' '}
          {Math.floor(data.main.feels_like)}
          {' '}
          C&deg;
        </p>
        <p>
          Wind
          {' '}
          {data.wind.speed}
          {' '}
          m/s
        </p>
      </div>
      <div className="weather-card-row__temp">
        {Math.floor(data.main.temp)}
        &deg;
        {extended && (
          <div className="weather-card-row__temp-minmax">
            {Math.floor(data.main.temp_min)}
            &deg;
            /
            {' '}
            {Math.floor(data.main.temp_max)}
            &deg;
          </div>
        )}
      </div>
      {detailed && (
        <>
          <div className="weather-card-row__details-left">
            <div className="weather-card-row__humidity">
              Humidity:
              {' '}
              {data.main.humidity}
              {' '}
              %
            </div>
            <div className="weather-card-row__pressure">
              Pressure:
              {' '}
              {data.main.pressure}
              {' '}
              hPa
            </div>
          </div>
          <div className="weather-card-row__details-right">
            <div className="weather-card-row__clouds">
              <img className="weather-card-row__cloud" src="/img/icons/weather/Cloud.svg" alt="" />
              {' '}
              {data.clouds.all}
              {' '}
              %
            </div>
            {data.rain && (
              <div className="weather-card-row__clouds">
                Rain volume (1h):
                {' '}
                {data.rain['1h']}
                {' '}
                mm
              </div>
            )}
          </div>
        </>
      )}
      {extended && (
        <div className="weather-card-row__sun">
          <div className="weather-card-row__sunrise">
            <img className="weather-card-row__sun-icon" src="/img/icons/weather/sun/sunrise.svg" alt="" />
            {getSunrise(data)}
          </div>
          <div className="weather-card-row__sunset">
            <img className="weather-card-row__sun-icon" src="/img/icons/weather/sun/sunset.svg" alt="" />
            {getSunset(data)}
          </div>
        </div>
      )}
      {withActions && (
        <div className="weather-card-row__actions">
          {
            extended
            && canAdd
            && onAdd
            && <PlusOutlined onClick={() => onAdd(data.name)} className="weather-card-row__action" />
          }
          <NavLink to={`/weather/${data.name}`}>
            <AppstoreOutlined className="weather-card-row__action" />
          </NavLink>
        </div>
      )}
    </div>
  </Card.Grid>
);

export default WeatherCardRow;
