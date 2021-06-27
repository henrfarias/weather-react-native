export interface ICity {
  results: {
    components: {
      city: string;
      country: string;
      state_code: string;
    }
    geometry: {
      lat: number;
      lng: number;
    }
  }[]
  total_results?: number;
}