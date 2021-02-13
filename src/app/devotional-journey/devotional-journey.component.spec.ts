import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionalJourneyComponent } from './devotional-journey.component';

describe('DevotionalJourneyComponent', () => {
  let component: DevotionalJourneyComponent;
  let fixture: ComponentFixture<DevotionalJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevotionalJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevotionalJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
