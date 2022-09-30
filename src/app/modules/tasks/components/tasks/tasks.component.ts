import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/state/actions/tasks.actions';
import { selectTasks, selectUser } from 'src/app/state/app.selectors';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  user$ = this.store.select(selectUser);
  tasks$ = this.store.select(selectTasks);

  formTask = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[a-z\d\s]+$/i)]),
  });

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      if (user.user === "") this.router.navigate(['/'])
    })
  }

  addTask() {

    const form = this.formTask.value

    this.store.dispatch(addTask(form))

    this.formTask.setValue({ name: '' })

  }

}
