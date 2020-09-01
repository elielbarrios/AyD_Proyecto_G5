import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  selected:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(){
    this.selected = "texto";
  }

  delete(){
    
  }

}
