import { ResponseError } from '../../interfaces/response-error';

export interface IAuthResponse extends ResponseError {
  name: string;
  email: string;
  access_token: string;
}

export interface ILoginParam {
  email: string;
  password: string;
}

export interface ISignupParam {
  email: string;
  password: string;
  confirm_password: string;
}
