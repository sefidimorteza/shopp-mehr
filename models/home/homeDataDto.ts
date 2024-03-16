import type { productCardDto } from "../productCard";

export interface BannerDto {
    creationDate: string;
    link: string;
    imageName: string;
    position: BannerPosition;
}
export interface SliderDto {
    creationDate: string;
    title: string;
    link: string;
    imageName: string;
}
export enum BannerPosition {
    زیر_اسلایدر,
    سمت_چپ_اسلایدر,
    بالای_اسلایدر,
    سمت_راست_شگفت_انگیز,
    وسط_صفحه
}
export interface HomeDataDto {
    banners: BannerDto[];
    sliders: SliderDto[];
    latestProduct: productCardDto[];
    amazingProducts: productCardDto[]
}