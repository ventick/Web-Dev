import { Component, OnChanges, SimpleChanges, input, output, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnChanges {
  readonly products = input.required<Product[]>();
  readonly categoryName = input.required<string>();
  readonly productDeleted = output<number>();
  readonly productLiked = output<number>();

  protected readonly visibleProducts = signal<Product[]>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.visibleProducts.set(this.products());
    }
  }

  protected handleDelete(productId: number): void {
    this.visibleProducts.update((products) => products.filter((product) => product.id !== productId));
    this.productDeleted.emit(productId);
  }

  protected handleLike(productId: number): void {
    this.productLiked.emit(productId);
  }
}
