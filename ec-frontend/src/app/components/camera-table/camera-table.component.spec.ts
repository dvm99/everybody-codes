import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraTableComponent } from './camera-table.component';

describe('CameraTableComponent', () => {
  let component: CameraTableComponent;
  let fixture: ComponentFixture<CameraTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CameraTableComponent]
    });
    fixture = TestBed.createComponent(CameraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
