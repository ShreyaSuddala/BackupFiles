import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnchartComponent } from './columnchart.component';

describe('ColumnchartComponent', () => {
  let component: ColumnchartComponent;
  let fixture: ComponentFixture<ColumnchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnchartComponent]
    });
    fixture = TestBed.createComponent(ColumnchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
