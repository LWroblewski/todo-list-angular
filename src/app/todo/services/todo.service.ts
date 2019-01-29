import { Todo } from '../model/todo.';
import { Observable } from 'rxjs';

export interface ITodoService {
  getTodos(): Observable<Todo[]>;
  getTodoDetail(): Observable<Todo>;
}
