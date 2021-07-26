export default class WeatherService {
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5';

  private apiKey: string = process.env.WEATHER_API_KEY;

  async getResource(url: string) {
    const res = await fetch(`${this.baseUrl}${url}&appid=${this.apiKey}&units=metric`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`
        + `, received ${res.status}`);
    }

    return res.json();
  }

  async getWeatherByCityName(name: string) {
    return this.transformWeatherData(await this.getResource(`/weather?q=${name}`));
  }

  async getDailyForecastByCityName(name: string, daysCount: number = 7) {
    const response = await this.getResource(`/forecast?q=${name}&cnt=${daysCount}`);
    return response.list.map((forecast: any) => this.transformForecastData(forecast));
  }

  async getWeatherByCoordinates(lat: string, lon: string) {
    return this.transformWeatherData(await this.getResource(`/weather?lat=${lat}&lon=${lon}`));
  }

  private transformWeatherData(data: any) {
    return {
      id: data.id,
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.weather[0].humidity,
      visibility: data.visibility,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      windSpeed: data.wind.speed,
      clouds: data.clouds.all,
    };
  }

  private transformForecastData(data: any) {
    return {
      id: data.weather[0].id,
      day: data.dt_txt,
      main: data.weather[0].main,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      windSpeed: data.wind.speed,
    };
  }
}
