import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { SharedModule } from '../../core/shared.module';
import { TodoDetailComponent } from './todo-detail.component';

@NgModule({
  declarations: [
    TodoDetailComponent
  ],
  imports: [
    SharedModule,
    MatCardModule
  ]
})
export class TodoDetailModule { }
