import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodospagoComponent } from './metodospago.component';

describe('MetodospagoComponent', () => {
  let component: MetodospagoComponent;
  let fixture: ComponentFixture<MetodospagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodospagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
