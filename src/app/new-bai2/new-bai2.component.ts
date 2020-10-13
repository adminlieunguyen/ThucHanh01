import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bai2',
  templateUrl: './new-bai2.component.html',
  styleUrls: ['./new-bai2.component.css']
})
export class NewBai2Component implements OnInit {
  constructor() { }
  s=0;
  n: any;
  x: any;
  ngOnInit(): void { }
  Tinh(){
    let tmp=1;
    for(let i=1;i<=this.n;++i){
        this.s= this.s+ (Math.pow(-1,i))*(Math.pow(this.x,i)/luythua(i));
    }
  }
}
function luythua(a: number) {
  let luythua=1;
  for (let i = 1; i <=a; i++) {
    luythua*=i;
  }
  return luythua;
}
