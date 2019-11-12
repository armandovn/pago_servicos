import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCourseComponent } from './item-course.component';

describe('ItemCourseComponent', () => {
  let component: ItemCourseComponent;
  let fixture: ComponentFixture<ItemCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
