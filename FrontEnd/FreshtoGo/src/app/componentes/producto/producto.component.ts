import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  constructor() { }

  selected:string = "";

  ngOnInit(): void {
  }

  seleccionar(){
    this.selected = "texto";
  }

  delete(){
    
  }

}
