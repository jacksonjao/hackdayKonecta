import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  login(value) {
    return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }
  isAuth() {
    return this.afAuth.user;
  }

  getUser() {
    return this.afAuth.user;
  }
}
