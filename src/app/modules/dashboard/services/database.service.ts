import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable()
export class DatabaseService {
  items: Observable<any[]>;
  constructor(private db: AngularFirestore) {
  }

  ceateDocument(form) {
    this.db.collection('users').doc(form.document.toString()).set({...form});
  }
}
