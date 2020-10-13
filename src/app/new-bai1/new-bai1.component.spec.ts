import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBai1Component } from './new-bai1.component';

describe('NewBai1Component', () => {
  let component: NewBai1Component;
  let fixture: ComponentFixture<NewBai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
