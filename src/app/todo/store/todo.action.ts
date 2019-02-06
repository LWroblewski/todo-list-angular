import { Todo } from '../model/todo';

export namespace TodoActions {
  export enum Types {
    FIND_ALL = '[TODO] FIND_ALL',
    FIND_ALL_SUCCESS = '[TODO] FIND_ALL_SUCCESS',
    FIND_ALL_ERROR = '[TODO] FIND_ALL_ERROR',
    GET_DETAIL = '[TODO] GET_DETAIL',
    GET_DETAIL_SUCCESS = '[TODO] GET_DETAIL_SUCCESS',
    GET_DETAIL_ERROR = '[TODO] GET_DETAIL_ERROR',
    UPDATE = '[TODO] UPDATE',
    SET_STATE = '[TODO] SET_STATE'
  }

  export class FindAll {
    readonly  type = Types.FIND_ALL;
  }

  export class FindAllSuccess {
    readonly  type = Types.FIND_ALL_SUCCESS;
    constructor(public todos: Todo[]) {}
  }

  export class FindAllError {
    readonly  type = Types.FIND_ALL_ERROR;
    constructor(public error: Error) {}
  }

  export class GetDetail {
    readonly  type = Types.GET_DETAIL;
    constructor(public todoId: number) {}
  }

  export class GetDetailSuccess {
    readonly  type = Types.GET_DETAIL_SUCCESS;
    constructor(public todo: Todo) {}
  }

  export class GetDetailError {
    readonly  type = Types.GET_DETAIL_ERROR;
    constructor(public error: Error) {}
  }

  export class Update {
    readonly  type = Types.UPDATE;
    constructor(public todo: Todo) {}
  }

  export class SetState {
    readonly  type = Types.SET_STATE;
    constructor(public payload: { todoId: number, isDone: boolean }) {}
  }

  export type Actions = FindAll | FindAllSuccess | FindAllError | GetDetail |
    GetDetailSuccess | GetDetailError | Update | SetState;
}
