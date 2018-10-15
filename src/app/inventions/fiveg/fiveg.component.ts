import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
@Component({
  selector: 'app-fiveg',
  templateUrl: './fiveg.component.html',
  styleUrls: ['./fiveg.component.css']
})
export class FivegComponent implements OnInit {
  a;
  b;
  c;
  data;
  constructor(
    private dataS:DataService
  ) { 

    this.data = dataS.datax;
  }

  ngOnInit() {
  
    
  }

}
