import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShifteditComponent } from './shiftedit.component';

describe('ShifteditComponent', () => {
  let component: ShifteditComponent;
  let fixture: ComponentFixture<ShifteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShifteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShifteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
