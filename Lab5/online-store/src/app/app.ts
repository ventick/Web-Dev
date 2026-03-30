import { Component, OnInit, signal } from '@angular/core';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCatalogService } from './services/product-catalog.service';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly categories = signal<Category[]>([]);
  protected readonly selectedCategory = signal<Category | null>(null);
  protected readonly selectedProducts = signal<Product[]>([]);

  constructor(private readonly productCatalogService: ProductCatalogService) {}

  ngOnInit(): void {
    this.categories.set(this.productCatalogService.getCategories());
  }

  protected selectCategory(category: Category): void {
    this.selectedCategory.set(category);
    this.selectedProducts.set(this.productCatalogService.getProductsByCategory(category.id));
  }

  protected handleProductDeleted(productId: number): void {
    this.productCatalogService.removeProduct(productId);

    if (this.selectedCategory()) {
      this.selectedProducts.set(this.productCatalogService.getProductsByCategory(this.selectedCategory()!.id));
    }
  }

  protected handleProductLiked(productId: number): void {
    this.productCatalogService.incrementLikes(productId);

    if (this.selectedCategory()) {
      this.selectedProducts.set(this.productCatalogService.getProductsByCategory(this.selectedCategory()!.id));
    }
  }
}
