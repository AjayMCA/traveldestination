import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportFacilityComponent } from './transport-facility.component';

describe('TransportFacilityComponent', () => {
  let component: TransportFacilityComponent;
  let fixture: ComponentFixture<TransportFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
