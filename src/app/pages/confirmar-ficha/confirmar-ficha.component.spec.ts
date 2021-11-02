import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarFichaComponent } from './confirmar-ficha.component';

describe('ConfirmarFichaComponent', () => {
  let component: ConfirmarFichaComponent;
  let fixture: ComponentFixture<ConfirmarFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarFichaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
