# Lab 9 Shop Back

Django REST Framework backend for the online store.

## Setup

```powershell
cd shop-back
..\venv\Scripts\activate
python manage.py migrate
python manage.py seed_data
python manage.py runserver
```

Admin login:

- username: `admin`
- password: `admin12345`

## Endpoints

- `/api/products/`
- `/api/products/<id>/`
- `/api/categories/`
- `/api/categories/<id>/`
- `/api/categories/<id>/products/`

## Postman

Collection file: `OnlineShopAPI.postman_collection.json`
