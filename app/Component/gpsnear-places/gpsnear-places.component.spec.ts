import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GPSNearPlacesComponent } from './gpsnear-places.component';

describe('GPSNearPlacesComponent', () => {
  let component: GPSNearPlacesComponent;
  let fixture: ComponentFixture<GPSNearPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPSNearPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPSNearPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
