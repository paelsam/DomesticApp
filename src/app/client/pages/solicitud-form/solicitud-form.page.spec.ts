import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudFormPage } from './solicitud-form.page';

describe('SolicitudFormPage', () => {
  let component: SolicitudFormPage;
  let fixture: ComponentFixture<SolicitudFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
