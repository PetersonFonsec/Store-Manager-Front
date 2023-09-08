import { IUser } from 'src/app/signin/pages/user/interfaces/user.model';
import { ResponseError } from '../../interfaces/response-error';

export interface IAuthResponse extends ResponseError {
  user: IUser;
  access_token: string;
}

export interface ILoginParam {
  email: string;
  password: string;
}

export interface IRecovertPasswordRequest {
  password: string;
  confirm_password: string;
}

export interface ISignupParam {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}
