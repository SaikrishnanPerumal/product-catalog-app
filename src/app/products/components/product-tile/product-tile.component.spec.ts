import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileComponent } from './product-tile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductTileComponent', () => {
  let component: ProductTileComponent;
  let fixture: ComponentFixture<ProductTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTileComponent, RouterTestingModule],
      providers: []
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
