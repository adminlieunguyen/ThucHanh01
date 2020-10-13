import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBai5Component } from './new-bai5.component';

describe('NewBai5Component', () => {
  let component: NewBai5Component;
  let fixture: ComponentFixture<NewBai5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBai5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBai5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
