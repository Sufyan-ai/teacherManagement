import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-dialog',
  templateUrl: './teacher-dialog.component.html',
  styleUrls: ['./teacher-dialog.component.css']
})
export class TeacherDialogComponent implements OnInit {

  teachers = ['Teacher1','Teacher2','Teacher3'];

  constructor() { }

  ngOnInit(): void {
  }

}
