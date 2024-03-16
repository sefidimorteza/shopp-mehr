<template>
    <div v-if="filteredBanners.length > 0">
        <div class="row mb-3 d-sm-block d-none" v-if="position == BannerPosition.بالای_اسلایدر">
            <div class="col-12">
                <div class="banner-img">
                    <a href="#">
                        <base-images :src="GetBannerImage(filteredBanners[0].imageName)" alt="banner" />
                    </a>
                </div>
            </div>
        </div>
        <div v-else-if="position == BannerPosition.سمت_چپ_اسلایدر" class="row">
            <div class="col-lg-12 col-6 mb-lg-3" v-for="item in filteredBanners.slice(0, 2)" ::key="item">
                <div class="banner-img banner-side-main-slider bg-position-right">
                    <a href="#" :style="{
        height: '220px',
        'background-image': `url(${GetBannerImage(filteredBanners[0].imageName)})`,
    }">
                        <base-images :src="GetBannerImage(filteredBanners[0].imageName)" alt="leftslider" />
                    </a>
                </div>
            </div>
        </div>
        <template v-else-if="position == BannerPosition.زیر_اسلایدر">
            <div class="col-md-6 mb-lg-0 mb-3" v-for="item in filteredBanners.slice(0, 2)">
                <div class="banner-img">
                    <a href="#">
                        <base-images :src="GetBannerImage(filteredBanners[0].imageName)" alt="underslider" />
                    </a>
                </div>
            </div>
        </template>
        <template v-if="position == BannerPosition.وسط_صفحه">
            <div class="col-md-3 col-6 mb-lg-0 mb-3" v-for="item in filteredBanners.slice(0, 4)">
                <div class="banner-img">
                    <a href="#">
                        <base-images :src="GetBannerImage(filteredBanners[0].imageName)" alt="mainslider" />
                    </a>
                </div>
            </div>
        </template>
    </div>

</template>

<script setup lang="ts">
import { BannerPosition, type BannerDto } from '~/models/home/homeDataDto';
import { GetBannerImage } from '~/utilities/ImageUrl';

const props = defineProps<{
    banners: BannerDto[],
    position: BannerPosition
}>()

const filteredBanners = props.banners.filter(f => f.position == props.position)
</script>

<style scoped></style>
