import * as React from 'react';

import Table from 'react-bootstrap/Table';

const ForecastTable: React.FunctionComponent<any> = ({ forecast }: any) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Time</th>
          <th>Weather</th>
          <th>Temperature</th>
          <th>Wind</th>
        </tr>
      </thead>
      <tbody>
        {forecast.map((dayForecast: any) => (
          <tr key={dayForecast.day}>
            <td>{dayForecast.day}</td>
            <td>
              {dayForecast.main}
              <img src={`http://openweathermap.org/img/wn/${dayForecast.icon}@4x.png`} width="75px" height="75px" alt="" />
            </td>
            <td>{dayForecast.temp} C&#176; (feels like {dayForecast.feelsLike} C&#176;)</td>
            <td>{dayForecast.windSpeed} m/s</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

export default ForecastTable;
