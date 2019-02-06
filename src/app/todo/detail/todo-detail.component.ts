import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoState } from '../store/todo.reducer';
import { selectCurrentTodo } from '../store/todo.state';
import { ActivatedRoute } from '@angular/router';
import { map, filter, tap, switchMap } from 'rxjs/operators';
import { TodoActions } from '../store/todo.action';

@Component({
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailComponent implements OnInit {

  todo$: Observable<Todo>;

  constructor(private store: Store<TodoState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.todo$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter(todoId => !!todoId),
      tap(todoId => this.store.dispatch(new TodoActions.GetDetail(Number(todoId)))),
      switchMap(todoId => this.store.pipe(select(selectCurrentTodo)))
    );
  }
}
