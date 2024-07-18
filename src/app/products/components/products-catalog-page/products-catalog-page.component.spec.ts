import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCatalogPageComponent } from './products-catalog-page.component';

describe('ProductsCatalogPageComponent', () => {
  let component: ProductsCatalogPageComponent;
  let fixture: ComponentFixture<ProductsCatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCatalogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
