<template>
    <div>
        <div class="product-card">
            <div class="product-thumbnail">
                <nuxt-link to="/">
                    <base-images :src="GetProductImage(product.imageName)" alt="product title" />
                </nuxt-link>
            </div>
            <div class="product-card-body">
                <h2 class="product-title">
                    <nuxt-link to="/">{{ product.title }}</nuxt-link>
                </h2>

                <div class="product-price fa-num">
                    <div class="d-flex align-items-center">
                        <del class="price-old">{{ product.price }}</del>
                        <span class="discount ms-2">%{{ product.discountPercentage
                            }}</span>
                    </div>
                    <span class="price-now">{{ product.totalPrice }}
                        <span class="currency">تومان</span></span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { productCardDto } from '~/models/productCard';
import { GetProductImage } from '~/utilities/ImageUrl';

defineProps<{
    product: productCardDto
}>()
</script>

<style scoped></style>