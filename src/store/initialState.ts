const initialState: any = {
  weather: {
    city: {
      loadingWeather: false,
      loadingForecast: false,
      name: 'Moscow',
      now: [],
      forecast: []
    }
  }
};

export default initialState;
