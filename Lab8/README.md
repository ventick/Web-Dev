# Lab 8 Shop Back

Django backend API for the online store.

## Setup

```powershell
cd shop-back
..\venv\Scripts\activate
python manage.py migrate
python manage.py seed_data
python manage.py runserver
```

## Endpoints

- `/api/products/`
- `/api/products/<id>/`
- `/api/categories/`
- `/api/categories/<id>/`
- `/api/categories/<id>/products/`
