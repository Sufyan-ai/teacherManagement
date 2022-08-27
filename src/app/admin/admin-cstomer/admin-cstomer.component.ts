import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SchedleDialogComponent } from '../schedule-dialog/schedle-dialog.component';
import { TeacherDialogComponent } from '../teacher-dialog/teacher-dialog.component';
import { TeachersService } from 'src/app/services/teachers.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-admin-cstomer',
  templateUrl: './admin-cstomer.component.html',
  styleUrls: ['./admin-cstomer.component.css']
})





export class AdminCstomerComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];
  teachers: any;

  constructor(public dialog: MatDialog,private teacherService: TeachersService ) {}

  ngOnInit(): void {
    // this.showTeachers();
  }

  openDialog(){
    this.dialog.open(TeacherDialogComponent);
  }
  openSchedleDialog(){
    this.dialog.open(SchedleDialogComponent);
  }
  showTeachers(){
    this.teachers = this.teacherService.listTeachers().subscribe(teacher=>{
      this.teachers = teacher;
      this.dataSource = this.teachers;
      console.log(this.teachers)
    })
  }

}
