import { Component, signal } from '@angular/core';
import { ProductCardComponent } from '../components/product-card.component';
import { products } from '../data/products';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  protected readonly products = products;
  protected readonly sharedProductName = signal('Nothing shared yet');

  protected onShare(product: Product): void {
    this.sharedProductName.set(product.name);
  }
}
