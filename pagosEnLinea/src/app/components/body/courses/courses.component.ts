// Angular imports
import { Component, OnInit } from '@angular/core';

// Services
import { CoursesService } from '../../../services/courses/courses.service';
import { StorageService } from "../../../services/storage/storage.service";
import { AuthenticationService } from '../../../services/authentication/authentication.service';

// Models
import { User } from "../../../models/user.model";
import { Course } from "../../../models/course.model";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public user: User;
  public courses: Course[];

  constructor(private storageService: StorageService,
              private authenticationService: AuthenticationService,
              private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
    this.user = this.storageService.getCurrentUser();
  }

  
}
