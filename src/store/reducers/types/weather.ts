export interface WeatherState {
  city: {
    loading: boolean,
    name: string,
    data: {
      main: string,
      description: string,
      icon: string,
      temp: string,
      windSpeed: string,
      clouds: string
    }
  }
}
