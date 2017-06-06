import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDataCardComponent } from './live-data-card.component';

describe('LiveDataCardComponent', () => {
  let component: LiveDataCardComponent;
  let fixture: ComponentFixture<LiveDataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDataCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
