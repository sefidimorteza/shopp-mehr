<template>
    <div>
        <div class="ui-box ui-box-specials pb-3 mb-5" style="background-color: #f03426">
            <div class="container">
                <div class="ui-box-title text-white fw-bolder d-sm-none">
                    قبل از اتمام جشنواره خرید کن!
                </div>
                <div class="ui-box-content">
                    <div class="row">
                        <div class="col-lg-3 d-lg-block d-none">
                            <div class="specials-container">
                                <img src="/images/theme/specials.png" class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <!-- Slider main container -->
                            <!-- <div class="swiper product-specials-swiper-slider mb-3 pb-5">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide d-lg-none d-sm-block d-none">
                                        <div class="specials-container">
                                            <img src="/images/theme/specials.png" class="img-fluid mb-0" alt="" />
                                            <nuxt-link to="/" class="btn btn-sm btn-outline-light"><i
                                                    class="ri-arrow-left-fill ms-2"></i></nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <carousel dir="rtl" v-model="currentSlide" :itemsToShow="4" v-if="isShow">
                                <slide class="swiper-slide main-swiper-slide" v-for="item in products">
                                    <ProductCardVue :product="item" />
                                </slide>
                                <template #addons="{ slidesCount }">
                                    <div class="slider__navigation" v-if="slidesCount > 4">
                                        <div v-if="currentSlide >= slidesCount - 2" class="swiper-button-next disabled">
                                        </div>
                                        <div v-else class="swiper-button-next " @click="currentSlide += 1">
                                        </div>

                                        <div v-if="currentSlide <= 1" class="swiper-button-prev disabled"></div>
                                        <div v-else :class="['swiper-button-prev', { 'disabled': currentSlide <= 1 }]"
                                            @click="currentSlide -= 1"></div>
                                    </div>
                                    <div class="slider__pagination" v-if="slides > 1" @click="currentSlide += 1">
                                        <label v-for="item in slides" :key="item"
                                            :class="{ active: item == activeSlide }" @click="chengeSlide(item)">

                                        </label>
                                    </div>
                                </template>
                            </carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import type { productCardDto } from '~/models/productCard';
import ProductCardVue from '../ProductCard.vue';

const props = defineProps<{
    products: productCardDto[]
}>()
const currentSlide = ref(1)


const isShow = ref(false)

const activeSlide = ref(1)
onMounted(() => {
    setTimeout(() => {
        isShow.value = true
    }, 100);
})
watch(currentSlide, (val) => {
    if (val == 1) {
        currentSlide.value = 1
        return;
    }
    activeSlide.value = Math.ceil(val / 4)
})


const slides = Number((props.products.length / 4).toFixed())


const chengeSlide = (slide: any) => {
    if (slide == 1) {
        currentSlide.value = 1
        return;
    }
    currentSlide.value = slide * 4
}
</script>

<style scoped>
.swiper-button-prev::after,
.swiper-button-next::after {
    color: black;
    font-size: 24px;
    font-weight: bold;
}

.swiper-button-prev {
    left: 1rem;
}

.swiper-button-next {
    right: 1rem;
}

.swiper-button-prev,
.swiper-button-next {
    color: white;
    width: 55px;
    height: 55px;
    background-color: #fff;
    border: 1px solid #efefef;
    border-radius: 50%;
    -webkit-box-shadow: 0 0 30px rgb(0 0 0 /8%);
    box-shadow: 0 0 30px rgb(0 0 0 / 8%);
}

.swiper-button-next {
    left: 1.5rem !important;
    right: unset;
    transform: rotate(180deg);

}

.swiper-button-prev {
    left: unset;
    right: 1.5rem !important;
    transform: rotate(180deg);
}

.swiper-button-prev.disabled,
.swiper-button-next.disabled {
    opacity: .5;
}

.slider__pagination {
    display: flex;
    gap: 1rem;
    position: absolute;
    width: 100%;
    bottom: -1rem;
    justify-content: center;
}

label {
    cursor: pointer;

}

.slider__pagination label {
    width: 6px;
    height: 6px;
    background-color: rgba(0, 0, 0, 0.712);
    border-radius: 50%;
}

.slider__pagination label.active {
    background: white !important;
    width: 8px !important;
    height: 8px !important;
}
</style>