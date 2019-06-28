export interface INotifyReducer {
  error: string;
  success: string;
}

export interface IMapDispatchToApp {
  showError: (message: string) => void;
}

export interface IMapStateToNotify {
  readonly errorLog: string;
  readonly successLog: string;
}

export interface IMapDispatchToNotify {
  hideError: () => void;
  hideSuccess: () => void;
}

export interface ILocations {
  id: number;
  location: string;
}

export interface IStack {
  id: number;
  stack: string;
  icon: string;
}

export interface ILocationsReducer {
  isFetching: boolean;
  locationsByIds: { [key: string]: ILocations };
  locationsIds: number[];
}

export interface IStackReducer {
  isFetching: boolean;
  stackByIds: { [key: string]: IStack };
  stackIds: number[];
}
