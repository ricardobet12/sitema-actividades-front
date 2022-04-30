import { TestBed } from '@angular/core/testing';

import { TablaClienteService } from './tabla-cliente.service';

describe('TablaClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablaClienteService = TestBed.get(TablaClienteService);
    expect(service).toBeTruthy();
  });
});
