const initialState: any = {
  weather: {
    city: {
      loadingWeather: false,
      loadingForecast: false,
      name: 'Moscow',
      now: [],
      forecast: []
    }
  },
  note: {
    list: []
  }
};

export default initialState;
