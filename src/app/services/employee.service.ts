import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any) {
    return this._http.post<any>("http://localhost:3000/employee", data);

  }
  getEmployeeList(): Observable<any> {
    return this._http.get("http://localhost:3000/employee");

  }
  updateEmployee(id:number,data: any) {
    return this._http.put<any>(`http://localhost:3000/employee/${id}`,data);

  }
  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employee/${id}`);

  }
}
