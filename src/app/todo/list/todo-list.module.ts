import {NgModule} from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import { MatListModule, MatIconModule } from '@angular/material';
import { SharedModule } from '../../core/shared.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    SharedModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TodoListModule { }
