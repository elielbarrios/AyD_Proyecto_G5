import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodospago',
  templateUrl: './metodospago.component.html',
  styleUrls: ['./metodospago.component.css']
})
export class MetodospagoComponent implements OnInit {

  productList:any;

  confirmacion=false;
  compracorrecta=false;
  constructor() { }

  ngOnInit(): void {
  }

}
