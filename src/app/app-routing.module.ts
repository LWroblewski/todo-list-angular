import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './todo/list/todo-list.component';
import { TodoDetailComponent } from './todo/detail/todo-detail.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
