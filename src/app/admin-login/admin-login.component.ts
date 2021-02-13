import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  constructor(private formBuilder : FormBuilder, private router:Router) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: [null,[Validators.required]],
      password : [null, [Validators.required]]
    });
  }

  public loginCheck() {
    const userName = this.loginForm.value.name;
    const passwd = this.loginForm.value.password;
    if ((userName === "admin") && (passwd === "admin")) {
      this.router.navigate(['./admin-home']);
    }
    else {
      alert('Login credential are wrong.');
    }
  }

}
