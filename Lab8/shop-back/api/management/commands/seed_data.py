from django.core.management.base import BaseCommand
from api.models import Category, Product


class Command(BaseCommand):
    help = "Seed categories and products for the shop API"

    def handle(self, *args, **options):
        Product.objects.all().delete()
        Category.objects.all().delete()

        smartphones = Category.objects.create(name="Smartphones")
        laptops = Category.objects.create(name="Laptops")
        home_devices = Category.objects.create(name="Home Devices")
        entertainment = Category.objects.create(name="Entertainment")

        products = [
            {
                "name": "Samsung Galaxy S24 5G 8/256 GB",
                "price": 429990,
                "description": "Compact flagship with AMOLED display and strong camera features.",
                "count": 12,
                "is_active": True,
                "category": smartphones,
            },
            {
                "name": "Samsung Galaxy A55 5G 8/128 GB",
                "price": 199990,
                "description": "Balanced mid-range smartphone with stable battery life.",
                "count": 20,
                "is_active": True,
                "category": smartphones,
            },
            {
                "name": "Xiaomi Redmi Note 13 5G 8/256 GB",
                "price": 129990,
                "description": "Affordable smartphone with smooth display and large storage.",
                "count": 25,
                "is_active": True,
                "category": smartphones,
            },
            {
                "name": "ASUS TUF Gaming A15 16/512 GB",
                "price": 599990,
                "description": "Gaming laptop with strong performance for modern tasks.",
                "count": 5,
                "is_active": True,
                "category": laptops,
            },
            {
                "name": "Acer Aspire Lite 16 8/512 GB",
                "price": 254990,
                "description": "Simple work and study laptop with a roomy display.",
                "count": 9,
                "is_active": True,
                "category": laptops,
            },
            {
                "name": "Lenovo IdeaPad Slim 3 15IAN8 8/256 GB",
                "price": 179990,
                "description": "Entry-level laptop for classes, browsing, and office apps.",
                "count": 7,
                "is_active": True,
                "category": laptops,
            },
            {
                "name": "Xiaomi Robot Vacuum E5",
                "price": 89990,
                "description": "Robot vacuum with dry and wet cleaning support.",
                "count": 15,
                "is_active": True,
                "category": home_devices,
            },
            {
                "name": "Dyson Airwrap Complete Long HS05",
                "price": 299990,
                "description": "Premium hair styler with multiple attachments.",
                "count": 4,
                "is_active": True,
                "category": home_devices,
            },
            {
                "name": "Sony PlayStation 5 Slim",
                "price": 299990,
                "description": "Modern game console with fast loading and strong performance.",
                "count": 6,
                "is_active": True,
                "category": entertainment,
            },
            {
                "name": "Nintendo Switch OLED",
                "price": 209990,
                "description": "Portable and dockable console with an OLED screen.",
                "count": 8,
                "is_active": True,
                "category": entertainment,
            },
        ]

        for product_data in products:
            Product.objects.create(**product_data)

        self.stdout.write(self.style.SUCCESS("Seed data created successfully."))
