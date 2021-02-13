import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourActivityComponent } from './tour-activity.component';

describe('TourActivityComponent', () => {
  let component: TourActivityComponent;
  let fixture: ComponentFixture<TourActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
