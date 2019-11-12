// Angular imports
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// PDF's generator
//import * as jsPDF from 'jspdf';

// Services
import { StorageService } from "../../../services/storage/storage.service";

// Models
import { Course } from "../../../models/course.model";
import { User } from "../../../models/user.model";

@Component({
  selector: 'app-item-course',
  templateUrl: './item-course.component.html',
  styleUrls: ['./item-course.component.scss']
})
export class ItemCourseComponent implements OnInit {

  @Input() course: Course;
  public user: User;

  constructor(private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
  }

}
