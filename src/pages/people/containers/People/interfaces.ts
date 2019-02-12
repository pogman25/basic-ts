export interface IPeopleReducer {
  readonly isFetching: boolean;
  readonly peopleByName: { [key: string]: IPeopleModel };
  readonly peopleNames: string[];
  readonly totalCount: number;
  readonly nextPage: number;
}

export interface IMapStateToApp {
  isFetching: boolean;
  nextPage: number;
  peopleList: IPeopleModel[];
  totalCount: number;
}

export interface IMapDispatchToApp {
  getPeople: () => void;
  showError: (message: string) => void;
  deletePerson: (name: string) => void;
}

export interface IPeopleModel {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
