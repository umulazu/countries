export type CountryResponse = {
  name: {
    common: string;
  };
  subregion: string;
  flags: {
    png: string;
    svg: string;
  };
  flag: string;
  cca2: string;
};

export type FieldsToFetch = (keyof CountryResponse)[];

export enum SearchFieldNames {
  Name = 'name',
  Code = 'alpha',
  Subregion = 'subregion'
};