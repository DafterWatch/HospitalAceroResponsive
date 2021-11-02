import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFichasComponent } from './ver-fichas.component';

describe('VerFichasComponent', () => {
  let component: VerFichasComponent;
  let fixture: ComponentFixture<VerFichasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFichasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
