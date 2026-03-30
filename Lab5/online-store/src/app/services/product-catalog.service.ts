import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Home Devices' },
    { id: 4, name: 'Entertainment' }
  ];

  private readonly products: Product[] = [
    {
      id: 1,
      categoryId: 1,
      name: 'Samsung Galaxy S24 5G 8/256 GB',
      description: 'Compact flagship with a bright AMOLED display, strong cameras, and smooth everyday performance.',
      price: 429990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3f/p03/22729812.jpeg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-ds-8-gb-256-gb-seryi-134106006/'
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Samsung Galaxy A55 5G 8/128 GB',
      description: 'Balanced mid-range phone with a good screen, reliable battery life, and modern Samsung design.',
      price: 199990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-temno-sinii-117420239/'
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Xiaomi Redmi Note 13 5G 8/256 GB',
      description: 'Affordable Android phone with a 120 Hz display and enough storage for daily apps and media.',
      price: 129990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h53/84953524535326.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-5g-8-gb-256-gb-sinii-116008513/'
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Xiaomi 14T 12/512 GB',
      description: 'Powerful smartphone with an OLED screen, fast charging, and a flagship-style camera setup.',
      price: 299990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p82/p68/5174017.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/xiaomi-14t-12-gb-512-gb-chernyi-129059964/'
    },
    {
      id: 5,
      categoryId: 1,
      name: 'Apple iPhone 16 128 GB',
      description: 'Modern iPhone with a clean camera system, strong battery efficiency, and a polished iOS experience.',
      price: 529990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/'
    },
    {
      id: 6,
      categoryId: 2,
      name: 'ASUS TUF Gaming A15 16/512 GB',
      description: 'Gaming laptop with Ryzen 7, RTX graphics, and a fast display for games and creative work.',
      price: 599990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8b/pc8/21971135.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa507nur-lp127-15-6-16-gb-ssd-512-gb-bez-os-90nr0jp5-m007s0-133912996/'
    },
    {
      id: 7,
      categoryId: 2,
      name: 'Acer Aspire Lite 16 8/512 GB',
      description: 'Practical laptop for work and study with a large screen and fast SSD storage.',
      price: 254990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paf/p16/25137440.png?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/acer-aspire-lite-16-16-8-gb-ssd-512-gb-bez-os-nx-j5rer-002-134790513/'
    },
    {
      id: 8,
      categoryId: 2,
      name: 'Acer Aspire 3 16/1000 GB',
      description: 'Everyday laptop with 16 GB RAM and a 1 TB SSD for office, browsing, and study tasks.',
      price: 319990,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h59/86416446947358.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-16-gb-ssd-1000-gb-win-11-pro-a315-59-52x6-nx-k6ter-02w-120936338/'
    },
    {
      id: 9,
      categoryId: 2,
      name: 'Lenovo IdeaPad Slim 3 15IAN8 8/256 GB',
      description: 'Thin entry-level laptop with an IPS display and enough performance for classes and office apps.',
      price: 179990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/pd6/14230494.png?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15ian8-15-6-8-gb-ssd-256-gb-bez-os-82xb007vrk-131728751/'
    },
    {
      id: 10,
      categoryId: 2,
      name: 'Lenovo IdeaPad Slim 3 15IRU8 8/256 GB',
      description: 'Simple modern notebook for study and daily work with a clean design and Windows installed.',
      price: 249990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2e/p81/89999323.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15iru8-15-6-8-gb-ssd-256-gb-win-11-home-82x700b2rk-153183160/'
    },
    {
      id: 11,
      categoryId: 3,
      name: 'Xiaomi Robot Vacuum E5',
      description: 'Entry-level robot vacuum with dry and wet cleaning plus simple app-based control.',
      price: 89990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h71/85879011311646.png?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/xiaomi-e5-belyi-118878244/'
    },
    {
      id: 12,
      categoryId: 3,
      name: 'Xiaomi Robot Vacuum S20',
      description: 'Smart vacuum with stronger suction and a more advanced route-planning cleaning routine.',
      price: 129990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h71/85879011311646.png?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s20-belyi-125120302/'
    },
    {
      id: 13,
      categoryId: 3,
      name: 'Xiaomi Robot Vacuum X20+',
      description: 'Premium home-cleaning robot with docking features and minimal daily maintenance.',
      price: 229990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/hba/87128995397662.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x20-plus-chernyi-123594497/'
    },
    {
      id: 14,
      categoryId: 3,
      name: 'Dyson Airwrap i.d. Long HS08',
      description: 'Premium multi-styler that dries, curls, and smooths hair with less extreme heat.',
      price: 349990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p16/p43/16267236.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-i-d-long-hs08-keramicheskii-patinas-zolotistyi-topaz-132307941/'
    },
    {
      id: 15,
      categoryId: 3,
      name: 'Dyson Airwrap Complete Long HS05',
      description: 'All-in-one styling set designed for drying and shaping different hair styles at home.',
      price: 299990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/peb/p38/54489427.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-complete-long-hs05-nikel-mednyi-113733252/'
    },
    {
      id: 16,
      categoryId: 4,
      name: 'Sony PlayStation 5 Slim',
      description: 'Current PlayStation console with fast loading and smooth gaming in a more compact body.',
      price: 299990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p95/p43/10965539.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-130795241/'
    },
    {
      id: 17,
      categoryId: 4,
      name: 'Nintendo Switch OLED',
      description: 'Portable and dockable console with a bright OLED screen and strong family-friendly game library.',
      price: 209990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/'
    },
    {
      id: 18,
      categoryId: 4,
      name: 'Sony WH-CH720N',
      description: 'Lightweight wireless headphones with active noise cancellation and long battery life.',
      price: 69990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/heb/84717301956638.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/sony-wh-ch720n-chernyi-110128274/'
    },
    {
      id: 19,
      categoryId: 4,
      name: 'JBL Charge 5',
      description: 'Portable Bluetooth speaker with strong bass, waterproof build, and long battery life.',
      price: 89990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he1/hd5/64232090927134.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/jbl-charge-5-seryi-101605356/'
    },
    {
      id: 20,
      categoryId: 4,
      name: 'Apple AirPods 4',
      description: 'Compact wireless earbuds for Apple devices with easy pairing and a familiar lightweight fit.',
      price: 99990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/apple-airpods-4-belyi-124333372/'
    }
  ];

  getCategories(): Category[] {
    return this.categories.map((category) => ({ ...category }));
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products
      .filter((product) => product.categoryId === categoryId)
      .map((product) => ({ ...product }));
  }

  incrementLikes(productId: number): void {
    const product = this.products.find((item) => item.id === productId);

    if (product) {
      product.likes += 1;
    }
  }

  removeProduct(productId: number): void {
    const index = this.products.findIndex((item) => item.id === productId);

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
}
