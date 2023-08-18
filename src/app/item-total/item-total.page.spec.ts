import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemTotalPage } from './item-total.page';

describe('ItemTotalPage', () => {
  let component: ItemTotalPage;
  let fixture: ComponentFixture<ItemTotalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemTotalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
