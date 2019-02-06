import {NgModule} from '@angular/core';
import {TODO_URL, TodoService} from './services/todo.service';
import {environment} from '../../environments/environment';
import {TodoListComponent} from './list/todo-list.component';
import {TodoItemComponent} from './list/item/todo-item.component';
import {TodoRoutingModule} from './todo-routing.module';
import {MatListModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
      TodoListComponent,
      TodoItemComponent
    ],
    imports: [
      CommonModule,
      MatListModule,
      TodoRoutingModule
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
