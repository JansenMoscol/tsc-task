import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './modules/login/components/form/form.component';
import { TasksComponent } from './modules/tasks/components/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
