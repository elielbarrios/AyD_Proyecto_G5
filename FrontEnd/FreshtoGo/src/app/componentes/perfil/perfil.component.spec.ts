import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuariosService  } from '../../servicios/usuarios.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilComponent ],
      imports: [FormsModule,RouterTestingModule,HttpClientTestingModule],
      providers: [UsuariosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe("Given: Dados que un usuario quiere editar los datos de su perfil", function(){
    describe("When Entra a su perfil", function(){
      describe("Then se obtienen los datos de usuario", function(){
        it("Muestra ", function(){
          component.getUser();
          expect(component.user).not.toEqual(null);
        });
      });
    });
  });

  describe("Given: Dado que un usuario quiere ver su password", function(){
   
    describe("When presiona el boton para ver su pass", function(){
      
      describe("Then Se muestra su password actual", function(){
        it("Muestra las pass", function(){
          let x_ = component.x;
          component.showPassword();
          expect(x_).toEqual(component.x);

        });
      });
    });
  });

  describe("Given: Dados que un usuario quiere eliminar su cuenta", function(){
    describe("When Entra a su perfil", function(){
      describe("Then elimina su perfil", function(){
        it("Muestra ", function(){
          component.getUser();
          expect(component.user.id_usuario).not.toEqual(null);
        });
      });
    });
  });






});