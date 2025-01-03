import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsolveComponent } from './errorsolve.component';

describe('ErrorsolveComponent', () => {
  let component: ErrorsolveComponent;
  let fixture: ComponentFixture<ErrorsolveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorsolveComponent]
    });
    fixture = TestBed.createComponent(ErrorsolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
