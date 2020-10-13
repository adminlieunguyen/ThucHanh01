import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bai8',
  templateUrl: './new-bai8.component.html',
  styleUrls: ['./new-bai8.component.css']
})
export class NewBai8Component implements OnInit {
  constructor() { }
  h: any;
  dt: any;
  kq: any;
  ngOnInit(): void {}
  Tinh(){
    this.kq= (this.h*this.dt)/3;
  }
}
