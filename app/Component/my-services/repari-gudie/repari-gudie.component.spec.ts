import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepariGudieComponent } from './repari-gudie.component';

describe('RepariGudieComponent', () => {
  let component: RepariGudieComponent;
  let fixture: ComponentFixture<RepariGudieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepariGudieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepariGudieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
