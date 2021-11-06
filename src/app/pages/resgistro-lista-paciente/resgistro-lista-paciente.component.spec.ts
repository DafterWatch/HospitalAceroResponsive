import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistroListaPacienteComponent } from './resgistro-lista-paciente.component';

describe('ResgistroListaPacienteComponent', () => {
  let component: ResgistroListaPacienteComponent;
  let fixture: ComponentFixture<ResgistroListaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgistroListaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistroListaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
