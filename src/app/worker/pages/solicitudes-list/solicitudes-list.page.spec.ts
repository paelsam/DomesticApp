import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesListPage } from './solicitudes-list.page';

describe('SolicitudesListPage', () => {
  let component: SolicitudesListPage;
  let fixture: ComponentFixture<SolicitudesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
