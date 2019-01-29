import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rootEffects, rootReducer } from './app.store';
import { SharedModule } from './core/shared.module';
import { TodoListModule } from './todo/list/todo-list.module';
import { TODO_URL, TodoService } from './todo/services/todo.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot(rootEffects),
    StoreDevtoolsModule.instrument({
      name: '[TODO-LIST]',
      maxAge: 15,
      logOnly: environment.production
    }),
    TodoListModule
  ],
  providers: [
    {
      provide: TODO_URL,
      useValue: environment.todoUrl
    },
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
