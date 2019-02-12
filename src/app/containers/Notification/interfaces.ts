export interface IMapStateToNotify {
  readonly errorLog: string;
  readonly successLog: string;
}

export interface IMapDispatchToNotify {
  hideError: () => void;
  hideSuccess: () => void;
}