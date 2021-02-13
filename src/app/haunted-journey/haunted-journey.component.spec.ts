import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HauntedJourneyComponent } from './haunted-journey.component';

describe('HauntedJourneyComponent', () => {
  let component: HauntedJourneyComponent;
  let fixture: ComponentFixture<HauntedJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HauntedJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HauntedJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
