import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscarLogsComponent } from './form-buscar-logs.component';

describe('FormBuscarLogsComponent', () => {
  let component: FormBuscarLogsComponent;
  let fixture: ComponentFixture<FormBuscarLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuscarLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuscarLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
