import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBai3Component } from './new-bai3.component';

describe('NewBai3Component', () => {
  let component: NewBai3Component;
  let fixture: ComponentFixture<NewBai3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBai3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBai3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
