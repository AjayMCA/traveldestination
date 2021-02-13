import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureJourneyComponent } from './nature-journey.component';

describe('NatureJourneyComponent', () => {
  let component: NatureJourneyComponent;
  let fixture: ComponentFixture<NatureJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
