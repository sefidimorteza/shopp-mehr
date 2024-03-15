<template>
    <div>
        <button>click</button>
    </div>
</template>

<script setup lang="ts">
import { FetchApi } from '~/utilities/CoustomFetch';

onMounted(async () => {
    var res = await FetchApi("banner")
    console.log(res.metaData.message);
})
</script>

<style scoped></style>