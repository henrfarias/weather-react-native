interface IWeather {
  location: {
    name: string;
  },
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    }
    wind_mph: number;
    wind_kph: number;
    pressure_mb: number;
    pressure_in: number;
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
  },
}

export default IWeather;