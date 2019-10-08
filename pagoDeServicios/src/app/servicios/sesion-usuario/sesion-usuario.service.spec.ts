import { TestBed } from '@angular/core/testing';

import { SesionUsuarioService } from './sesion-usuario.service';

describe('SesionUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SesionUsuarioService = TestBed.get(SesionUsuarioService);
    expect(service).toBeTruthy();
  });
});
