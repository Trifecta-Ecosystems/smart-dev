import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandoCardComponent } from './expando-card.component';

describe('ExpandoCardComponent', () => {
  let component: ExpandoCardComponent;
  let fixture: ComponentFixture<ExpandoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
