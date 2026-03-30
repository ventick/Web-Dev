from django.http import Http404, JsonResponse
from .models import Category, Product


def product_list(request):
    products = Product.objects.all()
    return JsonResponse([product.to_dict() for product in products], safe=False)


def product_detail(request, id: int):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as exc:
        raise Http404("Product not found") from exc

    return JsonResponse(product.to_dict())


def category_list(request):
    categories = Category.objects.all()
    return JsonResponse([category.to_dict() for category in categories], safe=False)


def category_detail(request, id: int):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as exc:
        raise Http404("Category not found") from exc

    return JsonResponse(category.to_dict())


def category_products(request, id: int):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as exc:
        raise Http404("Category not found") from exc

    return JsonResponse([product.to_dict() for product in category.products.all()], safe=False)
