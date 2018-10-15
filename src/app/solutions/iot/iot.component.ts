import { Component, OnInit } from '@angular/core';
import {DataService} from './../../data.service';
@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {
  data;
  parentVar = 100;
  constructor(
    private dataS: DataService
  ) {
    this.data = this.dataS.datax;
   }

  ngOnInit() {
  }


  showIx(temp, temp1){
    console.log(" Ix, Iy",temp, temp1);
    this.dataS.addData(temp, temp1);
  }

}
