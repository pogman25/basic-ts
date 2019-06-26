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
