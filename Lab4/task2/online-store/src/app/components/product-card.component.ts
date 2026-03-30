import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, input, output, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  readonly shareRequested = output<Product>();

  protected readonly selectedImageIndex = signal(0);
  protected readonly currentImage = computed(() => this.product().images[this.selectedImageIndex()] ?? this.product().image);
  protected readonly fullStars = computed(() => Array.from({ length: Math.floor(this.product().rating) }));
  protected readonly hasHalfStar = computed(() => this.product().rating % 1 >= 0.5);
  protected readonly emptyStars = computed(() => Array.from({ length: 5 - Math.floor(this.product().rating) - (this.hasHalfStar() ? 1 : 0) }));

  protected selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }

  protected getTelegramShareLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
  }

  protected getWhatsappShareLink(): string {
    return `https://wa.me/?text=${encodeURIComponent(`Check out this product: ${this.product().link}`)}`;
  }

  protected notifyShare(): void {
    this.shareRequested.emit(this.product());
  }
}
