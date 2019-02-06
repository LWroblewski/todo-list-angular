import {NgModule} from '@angular/core';
import {TodoListComponent} from './list/todo-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule {

}
