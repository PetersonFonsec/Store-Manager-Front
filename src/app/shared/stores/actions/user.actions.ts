import { createAction, props } from "@ngrx/store";
import { UserState } from "../reducers/user.reducers";

export const enterApplication = createAction(
 'User enter in application',
 props<UserState>()
)

export const updateProfile = createAction(
  'User update profile',
  props<UserState>()
 )
