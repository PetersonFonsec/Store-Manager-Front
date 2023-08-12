import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/signin/pages/user/interfaces/user.model";
import * as UserActions from '../actions/user.actions';

export interface UserState extends IUser {}

export const initialUserState: UserState = {} as any;

export const userReducers: ActionReducerMap<UserState> = {} as any;

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.enterApplication, (state, action) => {
    console.log(state);
    console.log(action);

    return {state, ...action}
  }));
