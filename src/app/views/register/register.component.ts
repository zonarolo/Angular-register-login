import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  register = {
    name: '',
    email: '',
    password: '',
  };

  onRegister() {
    console.log(this.register);
  }
}
