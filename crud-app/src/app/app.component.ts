import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crud-app';

  constructor(private _dialog: MatDialog) {}

  openAddEditEmployeForm() {
    this._dialog.open(EmployeeAddEditComponent);
  }
}
