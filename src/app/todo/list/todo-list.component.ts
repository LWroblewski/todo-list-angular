import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo.';
import { TodoState } from '../store/todo.reducer';
import { selectTodos } from '../store/todo.state';
import { Store, select } from '@ngrx/store';
import { TodoActions } from '../store/todo.action';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodoState>) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(select(selectTodos));

    this.store.dispatch(new TodoActions.FindAll());
  }
}
