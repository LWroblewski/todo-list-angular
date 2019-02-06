import { NgModule } from '@angular/core';
import { TodoListModule } from './list/todo-list.module';
import { TodoDetailModule } from './detail/todo-detail.module';
import { TODO_URL, TodoService } from './services/todo.service';
import { environment } from './../../environments/environment';
import { todoReducer } from './store/todo.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effect';

@NgModule({
  imports: [
    StoreModule.forFeature('todo', todoReducer),
    EffectsModule.forFeature([ TodoEffects ]),
  ],
  exports: [
    TodoListModule,
    TodoDetailModule
  ],
  providers: [
    {
      provide: TODO_URL,
      useValue: environment.todoUrl
    },
    TodoService
  ]
})
export class TodoModule { }
