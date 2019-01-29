import { Todo } from './../model/todo.';

export namespace TodoActions {
  export enum Types {
    FIND_ALL = '[TODO] FIND_ALL',
    FIND_ALL_SUCCESS = '[TODO] FIND_ALL_SUCCESS',
    FIND_ALL_ERROR = '[TODO] FIND_ALL_ERROR',
    SHOW_DETAIL = '[TODO] SHOW_DETAIL',
    UPDATE = '[TODO] UPDATE',
    SET_DONE = '[TODO] SET_DONE'
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

  export class ShowDetail {
    readonly  type = Types.SHOW_DETAIL;
  }

  export class Update {
    readonly  type = Types.UPDATE;
    constructor(public todo: Todo) {}
  }

  export type Actions = FindAll | FindAllSuccess | FindAllError | ShowDetail | Update;
}
