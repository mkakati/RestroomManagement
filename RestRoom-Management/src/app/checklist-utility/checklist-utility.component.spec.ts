import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistUtilityComponent } from './checklist-utility.component';

describe('ChecklistUtilityComponent', () => {
  let component: ChecklistUtilityComponent;
  let fixture: ComponentFixture<ChecklistUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
