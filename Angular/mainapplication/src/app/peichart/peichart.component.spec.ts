import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeichartComponent } from './peichart.component';

describe('PeichartComponent', () => {
  let component: PeichartComponent;
  let fixture: ComponentFixture<PeichartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeichartComponent]
    });
    fixture = TestBed.createComponent(PeichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
