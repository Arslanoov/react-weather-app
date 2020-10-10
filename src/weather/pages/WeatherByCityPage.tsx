import * as React from 'react';

import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from "react-redux";

import WeatherLayout from '../layouts/WeatherLayout';
import { getWeatherByCity } from "../../store/actions/weather";

import Loader from "../../common/components/Loader";
import WeatherService from "../services/weatherService";
import withBookstoreService from "../hoc/withWeatherService";
import WeatherData from "../components/WeatherData";

interface Props {
  getWeather: Function,
  loading: boolean,
  name: string,
  data: any
}

const WeatherByCityPage: React.FunctionComponent<Props> = ({ getWeather, loading, name, data }: Props) => {
  React.useEffect(() => {
    getWeather('Moscow');
  }, []);

  return (
    <WeatherLayout>
      <p>Weather page</p>
      {loading ? <Loader /> : (
        <>
          <p>City: {name}</p>
          <WeatherData weather={data} />
        </>
      )}
    </WeatherLayout>
  )
};

interface StateProps {
  weather: {
    city: {
      loading: boolean,
      name: string,
      data: any
    }
  }
}

const mapStateToProps = ({ weather: { city: { loading, name, data } } }: StateProps) => {
  return { loading, name, data };
};

const mapDispatchToProps = (dispatch: Dispatch, { weatherService}: {weatherService: WeatherService}) => {
  return bindActionCreators({
    getWeather: (cityName) => getWeatherByCity(weatherService, cityName)()
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(WeatherByCityPage);
