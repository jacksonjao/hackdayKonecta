import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument , AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private itemDoc: AngularFirestoreDocument;
  item: Observable<any>;
  private clients: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.itemDoc = db.doc('items/1');
    this.item = this.itemDoc.valueChanges();

    this.clients = db.collection()

  }

  insertClient(item) {
console.log(item)
      this.
  }
}
