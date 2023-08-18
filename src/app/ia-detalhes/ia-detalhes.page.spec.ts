import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IaDetalhesPage } from './ia-detalhes.page';

describe('IaDetalhesPage', () => {
  let component: IaDetalhesPage;
  let fixture: ComponentFixture<IaDetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IaDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
