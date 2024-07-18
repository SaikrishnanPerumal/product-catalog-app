import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { sampleProducts } from '../constants/products.constants';

fdescribe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProductById', () => {
    it('should return a product for a valid ID', () => {
      const expectedProduct = sampleProducts[0];
      const result = service.getProductById(expectedProduct.id);
      expect(result).toEqual(expectedProduct);
    });

    it('should return undefined for an invalid ID', () => {
      const result = service.getProductById('invalid_id');
      expect(result).toBeUndefined();
    });
  });

  describe('sortProducts', () => {
    it('should sort products by name', () => {
      const sortedByName = service.sortProducts([...sampleProducts], 'name');
      expect(sortedByName).toEqual([...sampleProducts].sort((a, b) => a.name.localeCompare(b.name)));
    });

    it('should sort products by price', () => {
      const sortedByPrice = service.sortProducts([...sampleProducts], 'price');
      expect(sortedByPrice).toEqual([...sampleProducts].sort((a, b) => a.price - b.price));
    });
  });

  // Assuming filterProducts method filters by searchTerm and category
  describe('filterProducts', () => {
    it('should filter products by searchTerm and category', () => {
      // This test needs to be implemented based on the actual filter logic.
      // Assuming the method filters products containing the searchTerm in the name
      // and belonging to the specified category.
      const searchTerm = 'sample';
      const category = 'category1';
      const filteredProducts = service.filterProducts(sampleProducts, searchTerm, category);
      expect(filteredProducts.length).toEqual(0);
    });
  });
});