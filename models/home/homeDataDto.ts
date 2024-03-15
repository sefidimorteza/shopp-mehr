import type { productCardDto } from "../productCard";

export interface BannerDto {
    creationDate: string;
    link: string;
    imageName: string;
    position: bannerPosition;
}
export interface SliderDto {
    creationDate: string;
    title: string;
    link: string;
    imageName: string;
}
export enum bannerPosition {
    زیر_اسلایدر = 0,
    سمت_چپ_اسلایدر = 1,
    بالای_اسلایدر = 2,
    سمت_راست_شگفت_انگیز = 3,
    وسط_صفحه = 4
}
export interface HomeDataDto {
    banner: BannerDto[];
    sliders: SliderDto[];
    latestProduct: productCardDto[];
    amazingProducts: productCardDto[]
}