import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticcentreComponent } from './diagnosticcentre.component';

describe('DiagnosticcentreComponent', () => {
  let component: DiagnosticcentreComponent;
  let fixture: ComponentFixture<DiagnosticcentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticcentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
