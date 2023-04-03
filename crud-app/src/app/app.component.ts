import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'crud-app';

  constructor(
    private _dialog: MatDialog,
    private _employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmployeForm() {
    this._dialog.open(EmployeeAddEditComponent);
  }
  getEmployeeList() {
    this._employeeService.getEmployeeList().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
