import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { ServicioCategoriaService } from '../../servicios/servicio-categoria.service'
import { Categoria } from '../../modelos/categoria'
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  selected:string = "";
  selectedDelete:string = "";
  idDelete:number = 0;
  selectedFather:string = "";
  newName:string = "";
  itemSelected:any;
  itemFather:any;
  listadoCategorias:any = [];

  constructor(private categoyService:ServicioCategoriaService) { }

  ngOnInit(): void 
  {
    this.getCategorys();
    console.log(this.listadoCategorias);
  }

  getCategorys():any
  {
    this.categoyService.getCategorys()
    .subscribe(
      res => {
        this.listadoCategorias = res;
      },
      err => console.error(err)
    );
  }

  seleccionar(item:any)
  {
    this.itemSelected = item; 
    this.selected = item.nombre_categoria;
  }

  seleccionarFather(item:any)
  {
    this.itemFather = item; 
    this.selectedFather = item.nombre_categoria;
  }

  selectDelete(id:any)
  {
    this.selectedDelete = id.nombre_categoria;
    this.idDelete = id.id_categoria;
  }

  delete(){
    this.categoyService.deleteCategory(this.idDelete)
    .subscribe(
      res => {
        console.log(res);
        alert("Categoría eliminada con exito!");
      },
      err => console.log(err)
    );
    this.selectedDelete = "";
    this.idDelete = 0;
  }

  update()
  {
    if(this.itemSelected != undefined)
    {
      let updateCategory:Categoria = {
        nombre_categoria : this.selected,
        id_categoria : this.itemSelected.id_categoria,
        root_id : this.itemSelected.root_id
      };
      delete updateCategory.root_id;
      console.log(updateCategory);
      this.categoyService.updateCategory(updateCategory)
      .subscribe(
        res => {
          console.log(res);
          alert("Categoría editada con exito!");
        },
        err => console.log(err)
      );
    }
    this.selected = "";
  }

  create()
  {
    if(this.newName != "")
    {
      let newCategory:Categoria = {
        nombre_categoria : this.newName,
        root_id : this.itemFather.root_id
      };
      this.categoyService.createCategory(newCategory)
      .subscribe(
        res => {
          console.log(res);
          alert("Categoría creada con exito!");
        },
        err => console.log(err)
      );
    }
    this.selectedFather = "";
    this.newName = "";
  }
  
}
