import * as React from 'react';

import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import WeatherLayout from '../layouts/WeatherLayout';
import { getWeatherByCity, clearWeatherAndForecastData } from '../../store/actions/weather';

import Loader from '../../common/components/Loader';
import WeatherService from '../services/weatherService';
import withWeatherService from '../hoc/withWeatherService';
import WeatherData from '../components/WeatherData';
import ForecastTable from '../components/ForecastTable';

interface Props {
  getWeather: Function,
  clearWeatherAndForecastData: React.EffectCallback,
  loadingWeather: boolean,
  loadingForecast: boolean,
  name: string,
  weather: any,
  forecast: any,
}

const WeatherByCityPage: React.FC<Props> = ({
  getWeather, clearWeatherAndForecastData, loadingWeather, loadingForecast, name, weather, forecast,
}: Props) => {
  const [city, setCity] = React.useState(name ?? 'Moscow');

  React.useEffect(() => {
    getWeather(name);
    return clearWeatherAndForecastData;
  }, []);

  const onCityChange = (e: any) => {
    setCity(e.target.value);
  };

  const onCitySubmit = (e: any) => {
    e.preventDefault();
    if (city !== name) {
      getWeather(city);
    }
  };

  const loader = (
    <div className="text-center">
      <Loader />
    </div>
  );

  return (
    <WeatherLayout>
      <Form onSubmit={onCitySubmit}>
        <Form.Group className="col-sm-5 mx-auto">
          <h3 className="text-center">
            City:
            {name}
          </h3>
          <Form.Control type="text" value={city} onChange={onCityChange} />
        </Form.Group>
      </Form>

      {loadingWeather || !weather ? loader : (
        <>
          <WeatherData weather={weather} />
          { loadingForecast || !forecast ? loader : (
            <ForecastTable forecast={forecast} />
          )}
        </>
      )}
    </WeatherLayout>
  );
};

interface StateProps {
  weather: {
    city: {
      loadingWeather: boolean,
      loadingForecast: boolean,
      name: string,
      weather: any,
      forecast: any,
    }
  }
}

const mapStateToProps = ({
  weather: {
    city: {
      loadingWeather, loadingForecast, name, weather, forecast,
    },
  },
}: StateProps) => ({
  loadingWeather, loadingForecast, name, weather, forecast,
});

const mapDispatchToProps = (dispatch: Dispatch, { weatherService }: {
  weatherService: WeatherService
}) => bindActionCreators({
  getWeather: (cityName) => getWeatherByCity(weatherService, cityName)(),
  clearWeatherAndForecastData,
}, dispatch);

export default compose(
  withWeatherService(),
  connect(mapStateToProps, mapDispatchToProps),
)(WeatherByCityPage);
