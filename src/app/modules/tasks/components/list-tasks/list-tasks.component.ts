import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  formTask = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {

    const form = this.formTask.value

    if (form.user === "test01" && form.password === "test01") {
      alert('ok')
    } else {
      alert('Credenciales incorrectas')
    }
  }

}
