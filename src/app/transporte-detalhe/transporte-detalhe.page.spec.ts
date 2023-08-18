import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransporteDetalhePage } from './transporte-detalhe.page';

describe('TransporteDetalhePage', () => {
  let component: TransporteDetalhePage;
  let fixture: ComponentFixture<TransporteDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransporteDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
