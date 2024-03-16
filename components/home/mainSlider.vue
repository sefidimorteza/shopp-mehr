<template>
    <carousel dir="rtl" v-model="currentSlide" wrap-around :autoplay="2500" v-if="isShow">
        <slide class="swiper-slide main-swiper-slide" v-for="(item, index) in data" :key="index">
            <a class="carousel__item" href="#">
                <img :src="GetSliderImage(item.imageName)" :alt="item.title" />
            </a>
        </slide>
        <template #addons="{ slidesCount }">
            <div class="slider__navigation">
                <button class="btn swiper-button-prev" v-if="slidesCount > currentSlide + 1"
                    @click="currentSlide += 1"></button>
                <button class="btn swiper-button-next" v-if="currentSlide > 0" @click="currentSlide -= 1"></button>
            </div>
            <div class="slider__pagination">
                <label :class="{ active: item == currentSlide + 1 }" v-for="item in slidesCount" :key="item"
                    @click="currentSlide = item - 1">

                </label>
            </div>
        </template>
    </carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import type { SliderDto } from '~/models/home/homeDataDto';
import { GetSliderImage } from '~/utilities/ImageUrl';
const currentSlide = ref(0)


const props = defineProps<{
    data: SliderDto[]
}>()
const isShow = ref(false)

onMounted(() => {
    setTimeout(() => {
        isShow.value = true
    }, 100);
})

</script>

<style scoped>
.carousel__item {
    width: 100%;
    border-radius: 15px;
}

.carousel__item img {
    width: 100%;
    height: 455px;
    border-radius: 15px;
}

.carousel__slide {
    padding: 0;
}

.swiper-button-prev::after,
.swiper-button-next::after {
    color: white;
    font-size: 24px;
    font-weight: bold;
}

.swiper-button-prev,
.swiper-button-next {
    color: white;
    width: 55px;
    height: 55px;
    background: transparent;
}

.btn {
    border: none;
}

.slider__pagination {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    width: 100%;
    bottom: 2rem;
    justify-content: center;
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