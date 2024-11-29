import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsListService {
  private apiUrl = 'http://127.0.0.1:8000/api/students'; 

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addStudent(student: { name: string; email: string }): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }

  updateStudent(id: string, student: { name: string; email: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, student);
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
