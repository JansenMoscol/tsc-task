import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './modules/login/components/form/form.component';
import { ListTasksComponent } from './modules/tasks/components/list-tasks/list-tasks.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/reducers/user.reducer';
import { TasksComponent } from './modules/tasks/components/tasks/tasks.component';
import { tasksReducer } from './state/reducers/tasks.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListTasksComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: userReducer, tasks: tasksReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
