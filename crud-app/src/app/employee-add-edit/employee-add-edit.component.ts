import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss'],
})
export class EmployeeAddEditComponent {
  employeForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _employeeService: EmployeeService,
    private _dialogRef: MatDialogRef<EmployeeAddEditComponent>
  ) {
    this.employeForm = this._fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dateOfBirth: '',
      education: '',
      gender: '',
      company: '',
      experience: '',
      package: '',
    });
  }
  onFormSubmit() {
    if (this.employeForm.valid) {
      this._employeeService.addEmployee(this.employeForm.value).subscribe({
        next: (val: any) => {
          alert('Employee added successfuly ! ');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
