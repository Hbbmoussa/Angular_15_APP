import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss'],
})
export class EmployeeAddEditComponent {
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
}