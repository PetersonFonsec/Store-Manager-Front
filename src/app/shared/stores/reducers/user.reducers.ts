import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/signin/pages/user/interfaces/user.model";
import * as UserActions from '../actions/user.actions';
import { environment } from "src/environments/environment";

export interface UserState extends IUser {}

export const initialUserState = () => {
  const user = localStorage.getItem(environment.user);
  return user ? JSON.parse(user) : {}
};

export const userReducers: ActionReducerMap<UserState> = {} as any;

export const userReducer = createReducer(
  initialUserState(),
  on(UserActions.enterApplication, (state, action) => {
    localStorage.setItem(environment.user, JSON.stringify(action));
    return {state, ...action}
  }),
  on(UserActions.updateProfile, (state, action) => {
    localStorage.setItem(environment.user, JSON.stringify(action));
    return {state, ...action}
  }),
);
