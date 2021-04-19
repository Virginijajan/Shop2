import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShopsShopComponent } from './all-shops-shop.component';

describe('AllShopsShopComponent', () => {
  let component: AllShopsShopComponent;
  let fixture: ComponentFixture<AllShopsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllShopsShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShopsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
