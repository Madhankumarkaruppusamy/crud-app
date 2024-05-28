import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empform:FormGroup;

  education:string[]=[
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]
  constructor(private _fb:FormBuilder){
    this.empform=this._fb.group({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        education: '',
        company: '',
        experience:'',
        package: ''
    })
  }
  OnFormSubmit(){
    if(this.empform.valid){
      console.log(this.empform.value);
    }
  }
}
