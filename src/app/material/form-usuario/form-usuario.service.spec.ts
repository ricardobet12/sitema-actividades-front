import { TestBed } from '@angular/core/testing';

import { FormUsuarioService } from './form-usuario.service';

describe('FormUsuarioService', () => {
  let service: FormUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
