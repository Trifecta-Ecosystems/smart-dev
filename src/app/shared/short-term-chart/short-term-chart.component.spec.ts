import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTermChartComponent } from './short-term-chart.component';

describe('ShortTermChartComponent', () => {
  let component: ShortTermChartComponent;
  let fixture: ComponentFixture<ShortTermChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTermChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTermChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
