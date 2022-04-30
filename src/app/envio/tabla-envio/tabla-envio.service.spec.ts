import { TestBed } from '@angular/core/testing';

import { TablaEnvioService } from './tabla-envio.service';

describe('TablaEnvioService', () => {
  let service: TablaEnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaEnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
