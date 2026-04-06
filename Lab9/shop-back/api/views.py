from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=["get"])
    def products(self, request, pk=None):
        category = self.get_object()
        serializer = ProductSerializer(category.products.all(), many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()

        min_price = self.request.query_params.get("min")
        max_price = self.request.query_params.get("max")

        try:
            if min_price is not None:
                queryset = queryset.filter(price__gte=float(min_price))
            if max_price is not None:
                queryset = queryset.filter(price__lte=float(max_price))
        except ValueError:
            pass

        return queryset
