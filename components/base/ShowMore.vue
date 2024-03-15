<template>
    <div :class="['expandable-text pt-1', { active: isShow }]" :style="{ height: `${heightText}px` }">
        <div class="expandable-text_text fa-num">
            <slot />
        </div>
        <div class="expandable-text-expand-btn justify-content-start text-sm">
            <span :class="['show-more', { 'd-none': isShow }]" @click="toggleActive">
                {{ showText }}<i class="ri-arrow-down-s-line ms-2"></i>
            </span>
            <span :class="['show-less', { 'd-none': isShow == false }]" @click="toggleActive">
                {{ closeText }} <i class="ri-arrow-up-s-line ms-2"></i>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    heightText: {
        type: Number,
        default: 100
    },
    showText: {
        type: String,
        default: "مشاهده بیشتر"
    },
    closeText: {
        type: String,
        default: "مشاهده کمتر"
    },
})
const isShow = ref(false)
const toggleActive = () => {
    isShow.value = !isShow.value;
}
</script>

<style scoped></style>