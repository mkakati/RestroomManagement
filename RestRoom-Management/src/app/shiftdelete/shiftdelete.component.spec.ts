import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftdeleteComponent } from './shiftdelete.component';

describe('ShiftdeleteComponent', () => {
  let component: ShiftdeleteComponent;
  let fixture: ComponentFixture<ShiftdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
