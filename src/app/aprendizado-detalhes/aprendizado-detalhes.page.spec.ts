import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AprendizadoDetalhesPage } from './aprendizado-detalhes.page';

describe('AprendizadoDetalhesPage', () => {
  let component: AprendizadoDetalhesPage;
  let fixture: ComponentFixture<AprendizadoDetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AprendizadoDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
