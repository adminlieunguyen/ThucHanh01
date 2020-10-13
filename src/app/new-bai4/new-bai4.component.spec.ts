import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBai4Component } from './new-bai4.component';

describe('NewBai4Component', () => {
  let component: NewBai4Component;
  let fixture: ComponentFixture<NewBai4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBai4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBai4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
