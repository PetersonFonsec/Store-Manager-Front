import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import * as MessageAction from '../actions/message.actions';
import { ToastTypes } from "../../components/toast/toast.enum";

export interface MessageState {
  tipe: ToastTypes,
  title: string,
  description: string,
}

export const initialMessageState = {
  tipe: ToastTypes.success,
  title: '',
  description: '',
};

export const messageReducers: ActionReducerMap<MessageState> = {} as any;

export const messageReducer = createReducer(
  initialMessageState,
  on(MessageAction.showSuccessMessage, (state, action) => {
    return {...action, tipe: ToastTypes.success}
  }),
  on(MessageAction.showErrorMessage, (state, action) => {
    return {...action, tipe: ToastTypes.error}
  }),
  on(MessageAction.hideMessage, (state) => {
    return initialMessageState
  }),
);
