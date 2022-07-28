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

export type FieldsToFetchCountries = (keyof CountryResponse)[];

export enum SearchFieldNames {
  Name = 'name',
  Code = 'alpha',
  Subregion = 'subregion',
  All = 'all'
};

export type FormValues = {
  searchValue: string;
  searchField: SearchFieldNames;
};
