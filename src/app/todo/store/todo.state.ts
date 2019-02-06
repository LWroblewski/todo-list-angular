import { createSelector } from '@ngrx/store';

export const selectTodoState = (state) => state.todo;

export const selectTodos = createSelector(
  selectTodoState,
  (todoState) => todoState.todos
);

export const selectCurrentTodo = createSelector(
  selectTodoState,
  (todoState) => todoState.selectedTodo
);
