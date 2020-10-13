import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBai7Component } from './new-bai7.component';

describe('NewBai7Component', () => {
  let component: NewBai7Component;
  let fixture: ComponentFixture<NewBai7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBai7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBai7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
