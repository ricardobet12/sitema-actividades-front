import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEnvioComponent } from './tabla-envio.component';

describe('TablaEnvioComponent', () => {
  let component: TablaEnvioComponent;
  let fixture: ComponentFixture<TablaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
