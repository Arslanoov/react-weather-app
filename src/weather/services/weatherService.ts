export default class WeatherService {
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey: string = process.env.WEATHER_API_KEY;

  async getResource (url: string) {
    const res = await fetch(`${this.baseUrl}${url}&appid=${this.apiKey}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };

  async getWeatherByCityName (name: string) {
    return this.transformData(await this.getResource(`/?q=${name}`));
  };

  async getWeatherByCoordinates(lat: string, lon: string) {
    return this.transformData(await this.getResource(`/?lat=${lat}&lon=${lon}`));
  }

  protected transformData(data: any) {
    return {
      id: data.id,
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      windSpeed: data.wind.speed,
      clouds: data.clouds.all
    }
  }
}
