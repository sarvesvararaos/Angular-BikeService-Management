import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearGpsComponent } from './near-gps.component';

describe('NearGpsComponent', () => {
  let component: NearGpsComponent;
  let fixture: ComponentFixture<NearGpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearGpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
