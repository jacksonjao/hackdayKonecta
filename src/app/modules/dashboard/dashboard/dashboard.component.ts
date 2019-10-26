import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  formRegister: FormGroup;
  constructor() {
    this.formRegister = new FormGroup({
      name: new FormControl(''),
      document: new FormControl(''),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      cel: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  addClient(value) {
console.log(value);
  }

}
