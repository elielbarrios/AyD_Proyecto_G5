import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from '../../servicios/auth.service';
import { RecuperacionComponent } from './recuperacion.component';

fdescribe('RecuperacionComponent', () => {
  let component: RecuperacionComponent;
  let fixture: ComponentFixture<RecuperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthService],
      declarations: [ RecuperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * 
   */

  describe("Given: Dado un email y un nit ", function(){
    describe("When: Cuando se solicita el password", function(){
      describe("Then: Entonces la variable user.password debe cambiar", function(){
        it("El la var user.password obtiene un valor distinto a vacio", function(){
          let password = component.user.password;
          component.recuperar();
          expect(component.user.password).not.toEqual(password);
        });
      });
    });
  });

});
