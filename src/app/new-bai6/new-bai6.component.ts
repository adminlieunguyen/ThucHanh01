import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bai6',
  templateUrl: './new-bai6.component.html',
  styleUrls: ['./new-bai6.component.css']
})
export class NewBai6Component implements OnInit {

  constructor() { }
   s = [-1,-5,3,4,8,9,-43,10,25,55];
   tong = 0;
  ngOnInit(): void {}
  Tinh(){
    for(let i=0; i<this.s.length;i++)
    {
      if(this.s[i]>0)
      this.tong += this.s[i];
    }
  }


}
