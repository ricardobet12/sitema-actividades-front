import { TestBed } from '@angular/core/testing';

import { TablaUsuarioService } from './tabla-usuario.service';

describe('TablaUsuarioService', () => {
  let service: TablaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
