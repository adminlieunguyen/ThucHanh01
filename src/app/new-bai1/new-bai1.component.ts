import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bai1',
  templateUrl: './new-bai1.component.html',
  styleUrls: ['./new-bai1.component.css']
})
export class NewBai1Component implements OnInit {

  s=0;
  n: any;
  x: any;
  ngOnInit(): void {

  }
  Tinh(){
    for(let i=1;i<=this.n;++i){
      this.s += Math.pow(this.x,i);
    }
  }
}
