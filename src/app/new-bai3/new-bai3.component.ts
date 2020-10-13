import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bai3',
  templateUrl: './new-bai3.component.html',
  styleUrls: ['./new-bai3.component.css']
})
export class NewBai3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
   s = [{hoten:'Nguyen Van Anh',dthi:9.5},
    {hoten:'Tran Thi Mai',dthi:10.5},
    {hoten:'Hoan Anh Dung',dthi:5.5}
  ];
  Tinh()
  {
    let catten = (s) => {
      let n =  s.lastIndexOf(' ');
      return s.substr(n+1) + ' ' + s.substr(0,n);
    }
    this.s.sort((a,b)=> {
      if(catten(a.hoten)>catten(b.hoten)) return 1;
      else if(catten(a.hoten)<catten(b.hoten)) return -1;
      return 0;
      });
 }
}
