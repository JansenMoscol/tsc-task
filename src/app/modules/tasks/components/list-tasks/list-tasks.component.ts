import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/state/app.selectors';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  user$ = this.store.select(selectUser);

  formTask = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      console.log(user)
      if (user.user === "") alert('mal')
    })
  }

  addTask() {

    const form = this.formTask.value

  }

}
