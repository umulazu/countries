export type CountryResponse = {
  cca2: string;
  
  flags: {
    png: string;
    svg: string;
  };
  flag: string;
  name: {
    common: string;
    official: string;
  };
  region: string;
  subregion: string;
  area: number;
  population: number;
  languages: Record<string, string>;

  capitalInfo: {
    latlng: [number, number];
  }
};

export type FieldsToFetchCountry = (keyof CountryResponse)[];
