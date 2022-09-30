import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/commons/models/Task';
import { changeStatusTask, removeTask } from 'src/app/state/actions/tasks.actions';
import { selectTasks } from 'src/app/state/app.selectors';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks$ = this.store.select(selectTasks)

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.tasks$.subscribe((res) => {
      console.log(res)
    })
  }

  removeTask(task: Task) {

    this.store.dispatch(removeTask({ id: task.id }))
  }

  onChangeStatus(task: Task) {

    this.store.dispatch(changeStatusTask({ id: task.id }))
  }

}
