// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// routing
import { Routing } from './app-routing.module';

// body components
import { CourseInfoComponent } from './components/body/course-info/course-info.component';
import { CoursesComponent } from './components/body/courses/courses.component';
import { ItemCourseComponent } from './components/body/item-course/item-course.component';
import { LoginFormComponent } from './components/body/login-form/login-form.component';
import { NewCourseFormComponent } from './components/body/new-course-form/new-course-form.component';
import { NewUserFormComponent } from './components/body/new-user-form/new-user-form.component';
import { ProfileComponent } from './components/body/profile/profile.component';
import { RegisterFormComponent } from './components/body/register-form/register-form.component';
import { VouchersComponent } from './components/body/vouchers/vouchers.component';

// header components
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';

// footer components
import { FooterComponent } from './components/footer/footer/footer.component';

// services
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CourseInfoComponent,
    CoursesComponent,
    ItemCourseComponent,
    LoginFormComponent,
    NewCourseFormComponent,
    NewUserFormComponent,
    ProfileComponent,
    RegisterFormComponent,
    VouchersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
