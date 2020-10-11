import * as React from 'react';

import './index.scss';

const WeatherData: React.FunctionComponent<any> = ({ weather }: any) => {
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-7 col-lg-5 mx-auto'>
        <div className="weather-data text-center">
          <div className="weather-info">
            <div className="weather-title">
              <h3>{weather.main}</h3>
            </div>
            <div className="weather-info">
              <h3>{weather.temp} C&#176;</h3>
              <p>Feels like {weather.feelsLike} C&#176;</p>
            </div>
          </div>

          <div className="weather-icon">
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} width="200px" height="200px" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default WeatherData;
