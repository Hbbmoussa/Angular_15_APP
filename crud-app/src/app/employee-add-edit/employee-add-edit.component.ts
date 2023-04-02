import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private _fb: FormBuilder) {
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
      console.log(this.employeForm.value);
    }
  }
}
