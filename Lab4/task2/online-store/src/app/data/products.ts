import { Product } from '../models/product.model';

function createProduct(product: Omit<Product, 'image'>): Product {
  return {
    ...product,
    image: product.images[0]
  };
}

export const products: Product[] = [
  createProduct({
    id: 134106006,
    name: 'Samsung Galaxy S24 5G 8/256 GB',
    description:
      'Compact flagship with a bright Dynamic AMOLED display, smooth 120 Hz refresh rate, and a polished premium feel. It is a strong choice for students and professionals who want speed, camera quality, and long-term Android support.',
    price: 429990,
    rating: 4.9,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3f/p03/22729812.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p94/p03/22729814.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p67/p0a/22729816.jpeg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-ds-8-gb-256-gb-seryi-134106006/'
  }),
  createProduct({
    id: 133912996,
    name: 'ASUS TUF Gaming A15 16/512 GB',
    description:
      'A gaming laptop with Ryzen 7 power, RTX 4050 graphics, and a 144 Hz IPS screen for fluid play. It handles study, editing, and modern games without feeling limited.',
    price: 599990,
    rating: 4.8,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p8b/pc8/21971135.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p6f/pc8/21971136.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p53/pc8/21971137.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa507nur-lp127-15-6-16-gb-ssd-512-gb-bez-os-90nr0jp5-m007s0-133912996/'
  }),
  createProduct({
    id: 134790513,
    name: 'Acer Aspire Lite 16 8/512 GB',
    description:
      'A practical laptop for work and study with a roomy 16-inch display and fast SSD storage. The lightweight design makes it convenient for everyday classes, projects, and browsing.',
    price: 254990,
    rating: 4.7,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/paf/p16/25137440.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pcb/p16/25137441.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pe7/p16/25137442.png?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/acer-aspire-lite-16-16-8-gb-ssd-512-gb-bez-os-nx-j5rer-002-134790513/'
  }),
  createProduct({
    id: 120936338,
    name: 'Acer Aspire 3 16/1000 GB',
    description:
      'Reliable mainstream notebook with 16 GB RAM and a 1 TB SSD for multitasking and storage. It fits users who want a single machine for lectures, office apps, and media.',
    price: 319990,
    rating: 4.6,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h98/h59/86416446947358.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hd4/h38/86416447012894.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h7b/h4e/86416447078430.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-16-gb-ssd-1000-gb-win-11-pro-a315-59-52x6-nx-k6ter-02w-120936338/'
  }),
  createProduct({
    id: 118878244,
    name: 'Xiaomi Robot Vacuum E5',
    description:
      'Entry-friendly robot vacuum with dry and wet cleaning, app control, and automatic charging. It helps keep small apartments tidy with very little daily effort.',
    price: 89990,
    rating: 4.7,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he9/h71/85879011311646.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hee/ha3/85879011377182.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hcd/h1f/85879011442718.png?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-e5-belyi-118878244/'
  }),
  createProduct({
    id: 125120302,
    name: 'Xiaomi Robot Vacuum S20',
    description:
      'A more advanced smart vacuum with stronger suction and route planning for consistent cleaning. It is a solid upgrade for busy homes with daily dust and pet hair.',
    price: 129990,
    rating: 4.8,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he9/h71/85879011311646.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hee/ha3/85879011377182.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hcd/h1f/85879011442718.png?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s20-belyi-125120302/'
  }),
  createProduct({
    id: 123594497,
    name: 'Xiaomi Robot Vacuum X20+',
    description:
      'Premium cleaning station model with automatic maintenance features and strong home automation potential. It is designed for users who want a cleaner floor with minimal intervention.',
    price: 229990,
    rating: 4.9,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hdc/hba/87128995397662.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hdc/hba/87128995397662.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hdc/hba/87128995397662.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x20-plus-chernyi-123594497/'
  }),
  createProduct({
    id: 132307941,
    name: 'Dyson Airwrap i.d. Long HS08',
    description:
      'A premium multi-styler aimed at quick drying, curling, and smoothing with less extreme heat. The elegant kit and guided styling approach make it a standout beauty device.',
    price: 349990,
    rating: 4.8,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p16/p43/16267236.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pc2/p42/16267239.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pc9/p3f/16267245.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-i-d-long-hs08-keramicheskii-patinas-zolotistyi-topaz-132307941/'
  }),
  createProduct({
    id: 113733252,
    name: 'Dyson Airwrap Complete Long HS05',
    description:
      'Complete long-barrel styling set that combines drying and shaping attachments in one device. It suits users who want salon-like styling flexibility at home.',
    price: 299990,
    rating: 4.7,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/peb/p38/54489427.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p07/p39/54489428.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p23/p39/54489429.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-complete-long-hs05-nikel-mednyi-113733252/'
  }),
  createProduct({
    id: 130795241,
    name: 'Sony PlayStation 5 Slim',
    description:
      'Modern console version with a compact body, fast loading, and smooth 4K-ready gaming. It is ideal for entertainment setups focused on exclusives, streaming, and couch co-op.',
    price: 299990,
    rating: 4.9,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p95/p43/10965539.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p95/p43/10965539.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p95/p43/10965539.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-130795241/'
  })
];
