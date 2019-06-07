import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBoardLoaderComponent } from './stock-board-loader.component';

describe('StockBoardLoaderComponent', () => {
  let component: StockBoardLoaderComponent;
  let fixture: ComponentFixture<StockBoardLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockBoardLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBoardLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
