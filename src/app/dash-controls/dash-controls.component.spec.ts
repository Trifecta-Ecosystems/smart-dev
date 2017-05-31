import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashControlsComponent } from './dash-controls.component';

describe('DashControlsComponent', () => {
  let component: DashControlsComponent;
  let fixture: ComponentFixture<DashControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
