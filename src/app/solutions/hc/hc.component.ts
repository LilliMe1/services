import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-hc',
  templateUrl: './hc.component.html',
  styleUrls: ['./hc.component.css']
})
export class HcComponent implements OnInit {

  constructor(
    private d: DataService
  ) { }

  ngOnInit() {
  }

}
