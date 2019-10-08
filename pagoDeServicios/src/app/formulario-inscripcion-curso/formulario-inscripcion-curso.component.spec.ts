import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInscripcionCursoComponent } from './formulario-inscripcion-curso.component';

describe('FormularioInscripcionCursoComponent', () => {
  let component: FormularioInscripcionCursoComponent;
  let fixture: ComponentFixture<FormularioInscripcionCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioInscripcionCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInscripcionCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
