import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  form: FormGroup;
  formRegister: FormGroup;
  errorMessage: string;
  successMessage: string;
  isRegisterTemplate: boolean;
  constructor(private authService: AuthService, public afAuth: AngularFireAuth, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    this.formRegister = new FormGroup({
      name: new FormControl(''),
      document: new FormControl(''),
      born: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      cel: new FormControl(''),
    });
  }
  tryRegister(value) {
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }
  ngOnInit() {
   // this.checkIfUserIsAuth()
  }

  login(value) {
    this.authService.login(value).then(res => {
      console.log(res);
      this.errorMessage = '';
      this.successMessage = 'Inicio de sesión exitoso';
      this.router.navigateByUrl('/dashboard');

    }, err => {
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }

  logOut() {
    this.authService.logOut().then(res => {
      console.log(res);
    });
  }


}

