import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionInterfazComponent } from './confirmacion-interfaz.component';

describe('ConfirmacionInterfazComponent', () => {
  let component: ConfirmacionInterfazComponent;
  let fixture: ComponentFixture<ConfirmacionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionInterfazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
