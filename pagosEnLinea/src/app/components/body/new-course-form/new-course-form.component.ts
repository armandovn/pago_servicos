import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// Models
import { Course } from '../../../models/course.model';

// Services
import { CoursesService } from '../../../services/courses/courses.service';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent implements OnInit {

  protected newCourseForm: FormGroup;
  protected imagen_seleccionada: String;

  constructor(private coursesService: CoursesService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newCourseForm = this.formBuilder.group({
      image: ['',Validators.required],
      title: ['',Validators.required],
      description: ['',Validators.required],
      places_available: ['',Validators.required],
      teacher: ['',Validators.required],
      sumary: ['',Validators.required]
    });
  }

  onSubmit(): void{

  }

}
