import { createAction, props } from "@ngrx/store";
import { MessageState } from "../reducers/message.reducers";

export interface IMessageActionFields extends Omit<MessageState, 'tipe'> {}

export const showSuccessMessage = createAction(
 'Show success message',
  props<IMessageActionFields>()
)

export const showErrorMessage = createAction(
  'Show error message',
  props<IMessageActionFields>()
)

export const hideMessage = createAction('Hide error message')
