import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureJourneyComponent } from './adventure-journey.component';

describe('AdventureJourneyComponent', () => {
  let component: AdventureJourneyComponent;
  let fixture: ComponentFixture<AdventureJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
