import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoCursoComponent } from './form-nuevo-curso.component';

describe('FormNuevoCursoComponent', () => {
  let component: FormNuevoCursoComponent;
  let fixture: ComponentFixture<FormNuevoCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNuevoCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
