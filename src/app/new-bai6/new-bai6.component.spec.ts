import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBai6Component } from './new-bai6.component';

describe('NewBai6Component', () => {
  let component: NewBai6Component;
  let fixture: ComponentFixture<NewBai6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBai6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBai6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
