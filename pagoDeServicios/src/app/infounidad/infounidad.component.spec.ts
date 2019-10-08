import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfounidadComponent } from './infounidad.component';

describe('InfounidadComponent', () => {
  let component: InfounidadComponent;
  let fixture: ComponentFixture<InfounidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfounidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfounidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
