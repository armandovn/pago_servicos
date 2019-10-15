import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCursoSinLogInComponent } from './tarjeta-curso-sin-log-in.component';

describe('TarjetaCursoSinLogInComponent', () => {
  let component: TarjetaCursoSinLogInComponent;
  let fixture: ComponentFixture<TarjetaCursoSinLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaCursoSinLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCursoSinLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
