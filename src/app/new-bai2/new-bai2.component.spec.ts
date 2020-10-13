import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBai2Component } from './new-bai2.component';

describe('NewBai2Component', () => {
  let component: NewBai2Component;
  let fixture: ComponentFixture<NewBai2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBai2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
