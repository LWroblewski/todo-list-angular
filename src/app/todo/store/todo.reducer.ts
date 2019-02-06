import { Todo } from '../model/todo';
import { TodoActions } from './todo.action';

export interface TodoState {
  todos: Todo[];
  selectedTodo: Todo;
}

export const initialState: TodoState = {
  todos: [],
  selectedTodo: null
};

export function todoReducer(state: TodoState = initialState, action: TodoActions.Actions) {
  switch (action.type) {
    case TodoActions.Types.FIND_ALL_SUCCESS:
      return {
        ...state,
        todos: action.todos
      };
    case TodoActions.Types.SET_STATE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.todoId ?
            { ...todo, isDone: action.payload.isDone } :
            todo
          )
      };
    case TodoActions.Types.GET_DETAIL_SUCCESS:
      return {
        ...state,
        selectedTodo: action.todo
      };
    default:
      return state;
  }
}
