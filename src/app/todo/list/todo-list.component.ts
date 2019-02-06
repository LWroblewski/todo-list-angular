import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';
import { TodoState } from '../store/todo.reducer';
import { selectTodos } from '../store/todo.state';
import { Store, select } from '@ngrx/store';
import { TodoActions } from '../store/todo.action';
import { MatSelectionListChange } from '@angular/material';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodoState>, private router: Router) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(
      select(selectTodos),
      map(todos => todos.sort(this.sortTodos))
    );

    this.store.dispatch(new TodoActions.FindAll());
  }

  private sortTodos(todoOne: Todo, todoBis: Todo): number {
    if (todoOne.isDone !== todoBis.isDone) {
      return todoOne.isDone ? 1 : -1;
    }
    return 0;
  }

  onTodoDoneChanged(event: MatSelectionListChange) {
    this.store.dispatch(new TodoActions.SetState({ todoId: event.option.value, isDone: event.option.selected }));
  }

  onDisplayTodo(id: number) {
    this.router.navigate([ 'todo/' + id ]);
  }
}
