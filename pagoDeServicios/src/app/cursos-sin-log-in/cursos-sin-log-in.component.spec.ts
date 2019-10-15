import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosSinLogInComponent } from './cursos-sin-log-in.component';

describe('CursosSinLogInComponent', () => {
  let component: CursosSinLogInComponent;
  let fixture: ComponentFixture<CursosSinLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosSinLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosSinLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
