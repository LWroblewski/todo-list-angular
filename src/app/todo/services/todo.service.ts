import {Observable} from 'rxjs';
import {Todo} from '../model/todo.';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, InjectionToken} from '@angular/core';

export const TODO_URL = new InjectionToken('todo.url');

@Injectable()
export class TodoService {

  constructor(private http: HttpClient,
              @Inject(TODO_URL) private todoUrl: string) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl);
  }

  getTodoDetail(): Observable<Todo> {
    return this.http.get<Todo>(this.todoUrl);
  }
}
