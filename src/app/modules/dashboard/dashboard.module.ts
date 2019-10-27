import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DatabaseService} from './services/database.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthService} from '../../core/services/auth.service';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [DashboardComponent, DocumentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AngularFirestoreModule
  ],
  providers: [DatabaseService, AuthService],

})
export class DashboardModule { }
