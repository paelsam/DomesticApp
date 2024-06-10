import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkersMapPage } from './workers-map.page';

describe('WorkersMapPage', () => {
  let component: WorkersMapPage;
  let fixture: ComponentFixture<WorkersMapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
