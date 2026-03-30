import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  readonly product = input.required<Product>();
  readonly liked = output<number>();
  readonly deleted = output<number>();

  protected likeProduct(): void {
    this.liked.emit(this.product().id);
  }

  protected deleteProduct(): void {
    this.deleted.emit(this.product().id);
  }

  protected getTelegramShareLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
  }

  protected getWhatsappShareLink(): string {
    return `https://wa.me/?text=${encodeURIComponent(`Check out this product: ${this.product().link}`)}`;
  }
}
