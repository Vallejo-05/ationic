import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaudeDetalhesPage } from './saude-detalhes.page';

describe('SaudeDetalhesPage', () => {
  let component: SaudeDetalhesPage;
  let fixture: ComponentFixture<SaudeDetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaudeDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
