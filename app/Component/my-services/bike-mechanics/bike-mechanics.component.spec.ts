import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeMechanicsComponent } from './bike-mechanics.component';

describe('BikeMechanicsComponent', () => {
  let component: BikeMechanicsComponent;
  let fixture: ComponentFixture<BikeMechanicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeMechanicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
