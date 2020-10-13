import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bai5',
  templateUrl: './new-bai5.component.html',
  styleUrls: ['./new-bai5.component.css']
})
export class NewBai5Component implements OnInit {

  constructor() { }
  ngOnInit(): void {}
  so= [3,4,8,10,25,55,66,88,99,100];
  sochinhphuog : any;
  scp(){
    let sochinhphuong = (n) =>{
      return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
    }
    this.sochinhphuog=this.so.filter(sochinhphuong);
  }


}
