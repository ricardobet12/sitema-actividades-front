import { TestBed } from '@angular/core/testing';

import { FormClienteService } from './form-cliente.service';

describe('FormClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormClienteService = TestBed.get(FormClienteService);
    expect(service).toBeTruthy();
  });
});
