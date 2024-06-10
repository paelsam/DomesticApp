import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalificacionesHistorialPage } from './calificaciones-historial.page';

describe('CalificacionesHistorialPage', () => {
  let component: CalificacionesHistorialPage;
  let fixture: ComponentFixture<CalificacionesHistorialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
