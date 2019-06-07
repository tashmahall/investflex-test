import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStockBoardsComponent } from './list-stock-boards.component';

describe('ListStockBoardsComponent', () => {
  let component: ListStockBoardsComponent;
  let fixture: ComponentFixture<ListStockBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStockBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStockBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
