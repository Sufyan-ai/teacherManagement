import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminCstomerComponent } from './admin/admin-cstomer/admin-cstomer.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { TeacherDialogComponent } from './admin/teacher-dialog/teacher-dialog.component';
import { SchedleDialogComponent } from './admin/schedule-dialog/schedle-dialog.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { TeacherDashboardComponent } from './Teacher/teacher-dashboard/teacher-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminCstomerComponent,
    TeacherDialogComponent,
    SchedleDialogComponent,
    TeacherDashboardComponent,
  ],
  entryComponents : [TeacherDialogComponent,SchedleDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatAutocompleteModule,
    HttpClientModule,
    TeacherDashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
