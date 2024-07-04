export interface CountryInterface {
  count: number;
  name: string;
  country: [
    {
      country_id: string;
      probability: number;
    }
  ];
}
