import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSensorsComponent } from './dash-sensors.component';

describe('DashSensorsComponent', () => {
  let component: DashSensorsComponent;
  let fixture: ComponentFixture<DashSensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
