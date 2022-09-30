import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginUser } from 'src/app/state/actions/user.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formLogin = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin() {

    const form = this.formLogin.value

    if (form.user === "test01" && form.password === "test01") {

      this.store.dispatch(loginUser(form))

      this.router.navigate(['/tasks'])

    } else {
      alert('Credenciales incorrectas')
    }
  }

}
