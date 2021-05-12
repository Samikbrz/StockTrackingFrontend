import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUnitAddComponent } from './product-unit-add.component';

describe('ProductUnitAddComponent', () => {
  let component: ProductUnitAddComponent;
  let fixture: ComponentFixture<ProductUnitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUnitAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUnitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
