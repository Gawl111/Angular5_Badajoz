import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-local',
  encapsulation: ViewEncapsulation.Native,
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @ViewChild('nombre') eNombre: any;

  constructor() { }

  ngOnInit() {
    console.log(this.eNombre);
  }

}
