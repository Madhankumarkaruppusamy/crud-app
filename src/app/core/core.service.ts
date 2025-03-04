import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message:string, action:string='OK') {
    this._snackBar.open(message, action,{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration:2000
    });
  }
}
