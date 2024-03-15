<template>
  <div dir="rtl">
      <the-main-header />
      <the-mobile-header />
      <main class="page-content">
        <div class="container">
          <slot />
        </div>
      </main>
      <the-footer />
  </div>
</template>

<script setup lang="ts">


useHead({
  link: [{ rel: "stylesheet", href: "/css/dependencies.css" },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
  { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" },
  ],
  script: [
    { src: "/js/dependencies/bootstrap-slider.min.js" },
    { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" },
    { src: "/js/dependencies/bootstrap.bundle.min.js" },
    { src: "/js/dependencies/fancybox.umd.js" },
    { src: "/js/dependencies/iziToast.min.js" },
    { src: "/js/dependencies/jquery-3.6.0.min.js" },
    { src: "/js/dependencies/jquery.countdown.min.js" },
    { src: "/js/dependencies/jquery.simple.timer.min.js" },
    { src: "/js/dependencies/nouislider.min.js" },
    { src: "/js/dependencies/select2.min.js" },
    { src: "/js/dependencies/simplebar.min.js" },
    { src: "/js/dependencies/swiper-bundle.min.js" },
    { src: "/js/dependencies/wNumb.js" },
    { src: "/js/dependencies/zoomsl.min.js" },
    { src: "/js/theme.js" },
    { src: "/js/custom.js" },
  ],
});
</script>

<style scoped></style>