export interface ICity {
  results: {
    components: {
      _type?: string;
      city?: string;
      town?: string;
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