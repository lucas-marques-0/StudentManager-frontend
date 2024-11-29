import { Component, OnInit } from '@angular/core';
import { StudentsListService } from './students-list.service';
import { Student } from './student';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent implements OnInit {
  students: Student[] = []
  formData = { name: '', email: '' }
  isEdit: boolean = false
  editId: string | null = null
  displayedColumns: string[] = ['name', 'email', 'actions']
  emptyForm: boolean = false
  invalidEmail: boolean = false

  constructor(private cdr: ChangeDetectorRef, private studentsListService: StudentsListService) {}

  ngOnInit() {
    this.loadStudents()
  }

  loadStudents() {
    this.studentsListService.getStudents().subscribe((data) => {
      this.students = Object.entries(data || {}).map(([key, value]: any) => ({
        id: key,
        ...value
      }))
      this.cdr.detectChanges();
    })
  }

  submitForm() {
    if (!this.formData.name || !this.formData.email) {
      this.emptyForm = true
      this.invalidEmail = false
      this.cdr.detectChanges()
      return
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.formData.email)) {
      this.invalidEmail = true  
      this.emptyForm = false  
      this.cdr.detectChanges()
      return
    }

    this.emptyForm = false
    this.invalidEmail = false

    if (this.isEdit && this.editId) {
      this.studentsListService
        .updateStudent(this.editId, this.formData)
        .subscribe(() => {
          this.loadStudents()
          this.resetForm()
        })
    } else {
      this.studentsListService.addStudent(this.formData).subscribe(() => {
        this.loadStudents()
        this.resetForm()
      })
    }
  }

  editStudent(student: Student) {
    this.isEdit = true
    this.editId = student.id
    this.formData = { name: student.name, email: student.email }
  }

  deleteStudent(id: string): void {
    this.studentsListService.deleteStudent(id).subscribe(() => {
      this.loadStudents()
    })
  }

  resetForm(): void {
    this.isEdit = false
    this.editId = null
    this.emptyForm = false
    this.invalidEmail = false
    this.formData = { name: '', email: '' }
    this.cdr.detectChanges();
  }
}
