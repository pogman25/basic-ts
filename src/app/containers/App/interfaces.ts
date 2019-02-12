export interface INotifyReducer {
  error: string;
  success: string;
}

export interface IMapDispatchToApp {
  showError: (message: string) => void;
}
