export interface IAuthResponse {
  token: string;
  role: string;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IInitialState {
  user: IAuthResponse | null;
}
