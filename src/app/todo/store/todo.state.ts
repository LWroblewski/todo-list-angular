import { createSelector } from '@ngrx/store';

export const selectTodoState = (state) => state.todo;

export const selectTodos = createSelector(
  selectTodoState,
  (todoState) => todoState.todos
);
