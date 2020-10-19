import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilComponent } from './perfil.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuariosService  } from '../../servicios/usuarios.service';

fdescribe('PerfilComponent', () => {
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

  it('should create perfil component', () => {
    const fixture = TestBed.createComponent(PerfilComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
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
    let tipo = (<HTMLInputElement>document.getElementById('myPassword')).type = 'password';
    describe("When presiona el boton para ver su pass", function(){
      component.showPassword();
      describe("Then Se muestra su password actual", function(){
        it("Muestra las pass", function(){
          expect((<HTMLInputElement>document.getElementById("myPassword")).type).toEqual('text');
        });
      });
    });
  });






});