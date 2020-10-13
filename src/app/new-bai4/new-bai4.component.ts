import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bai4',
  templateUrl: './new-bai4.component.html',
  styleUrls: ['./new-bai4.component.css']
})
export class NewBai4Component implements OnInit {
  constructor() { }
  s = [{hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', dthi:9},
       {hoten: 'Tran Thi Anh', quequan: 'Ha Noi', dthi:7.5},
       { hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', dthi:8.3},
       { hoten: 'Hoang Thi Yen', quequan: 'Hai Phong', dthi:9.3}
      ];
  ngOnInit(): void {}
  Loc(){
    this.s = this.s.filter(sv => {
      return sv.dthi > 8 && sv.quequan == 'Hai Phong';
      });
    }
}
