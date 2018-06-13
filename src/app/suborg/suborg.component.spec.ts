import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuborgComponent } from './suborg.component';

describe('SuborgComponent', () => {
  let component: SuborgComponent;
  let fixture: ComponentFixture<SuborgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuborgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuborgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
