import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BMIPage } from './bmi.page';

describe('BMIPage', () => {
  let component: BMIPage;
  let fixture: ComponentFixture<BMIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BMIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
