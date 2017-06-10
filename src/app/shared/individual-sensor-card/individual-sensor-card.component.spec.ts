import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSensorCardComponent } from './individual-sensor-card.component';

describe('IndividualSensorCardComponent', () => {
  let component: IndividualSensorCardComponent;
  let fixture: ComponentFixture<IndividualSensorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualSensorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualSensorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
