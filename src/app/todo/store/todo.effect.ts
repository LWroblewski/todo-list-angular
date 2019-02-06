import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodoService } from './../services/todo.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoActions } from './todo.action';

@Injectable()
export class TodoEffects {

  @Effect()
  findAll$: Observable<TodoActions.Actions> = this.actions$
    .pipe(
      ofType(TodoActions.Types.FIND_ALL),
      switchMap(action  =>  this.todoService.getTodos()),
      map(todos => new TodoActions.FindAllSuccess(todos)),
      catchError((error) => of(new TodoActions.FindAllError(error)))
  );

  @Effect()
  getDetail$: Observable<TodoActions.Actions> = this.actions$
    .pipe(
      ofType(TodoActions.Types.GET_DETAIL),
      switchMap(action  =>  this.todoService.getTodoDetail((action as TodoActions.GetDetail).todoId)),
      map(todo => new TodoActions.GetDetailSuccess(todo)),
      catchError((error) => of(new TodoActions.GetDetailError(error)))
  );

  constructor(
    private todoService: TodoService,
    private actions$: Actions,
) {}
}
