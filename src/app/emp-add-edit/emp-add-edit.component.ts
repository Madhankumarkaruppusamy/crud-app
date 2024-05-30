import { Component, OnInit, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  empform: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]
  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService:CoreService
  ) {


    this.empform = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    })
  }

  ngOnInit(): void {
    this.empform.patchValue(this.data);
  }

  OnFormSubmit() {
    if (this.empform.valid) {
      if (this.data) {
        this._empService.updateEmployee(this.data.id, this.empform.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee updated!','')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        })

      }
      else {
        this._empService.addEmployee(this.empform.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee saved!','')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      }
    }
  }
}
