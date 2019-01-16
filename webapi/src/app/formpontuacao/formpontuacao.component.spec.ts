import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpontuacaoComponent } from './formpontuacao.component';

describe('FormpontuacaoComponent', () => {
  let component: FormpontuacaoComponent;
  let fixture: ComponentFixture<FormpontuacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormpontuacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
