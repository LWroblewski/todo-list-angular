import { TodoEffects } from './todo/store/todo.effect';
import { todoReducer, TodoState } from './todo/store/todo.reducer';

export const rootReducer = {
  todo: todoReducer
};

export const rootEffects = [ TodoEffects ];
