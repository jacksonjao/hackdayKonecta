import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatabaseService} from '../services/database.service';
import {AuthService} from '../../../core/services/auth.service';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  formRegister: FormGroup;
  constructor(private db: DatabaseService, private authService: AuthService, private router: Router) {
    this.formRegister = new FormGroup({
      name: new FormControl('', Validators.required),
      document: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cel: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  addClient(value) {
    if ( this.formRegister.status === 'VALID') {
      this.db.ceateDocument(value);
    }
  }

  logOut() {
   this.authService.logOut();
   this.router.navigate(['/']);
  }

}
