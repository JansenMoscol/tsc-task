import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './modules/login/components/form/form.component';
import { ListTasksComponent } from './modules/tasks/components/list-tasks/list-tasks.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'tasks', component: ListTasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
