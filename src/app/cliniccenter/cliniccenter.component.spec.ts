import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniccenterComponent } from './cliniccenter.component';

describe('CliniccenterComponent', () => {
  let component: CliniccenterComponent;
  let fixture: ComponentFixture<CliniccenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliniccenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniccenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
