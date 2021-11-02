import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarFichasComponent } from './sacar-fichas.component';

describe('SacarFichasComponent', () => {
  let component: SacarFichasComponent;
  let fixture: ComponentFixture<SacarFichasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacarFichasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SacarFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
