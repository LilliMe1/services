import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rpie',
  templateUrl: './rpie.component.html',
  styleUrls: ['./rpie.component.css']
})
export class RpieComponent implements OnInit {

  @Input()
  childVar;
  constructor() { }

  ngOnInit() {
  }

}
