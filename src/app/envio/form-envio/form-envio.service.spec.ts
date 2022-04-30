import { TestBed } from '@angular/core/testing';

import { FormEnvioService } from './form-envio.service';

describe('FormEnvioService', () => {
  let service: FormEnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormEnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
