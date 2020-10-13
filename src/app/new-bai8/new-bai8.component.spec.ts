import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBai8Component } from './new-bai8.component';

describe('NewBai8Component', () => {
  let component: NewBai8Component;
  let fixture: ComponentFixture<NewBai8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBai8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBai8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
