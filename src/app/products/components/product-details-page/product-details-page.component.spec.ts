import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPageComponent } from './product-details-page.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('ProductDetailsPageComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;
  let mockActivateRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => '1'
      }
    },
    paramMap: of(new Map([['id', '1']]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsPageComponent, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivateRoute
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
