<template>
    <div>
        <base-button @click="isOpenModal = true" class="mt-5 mb-5" w-full outline size="lg">register</base-button>
        <base-modal v-model="isOpenModal">
            <h1>registerForm</h1>
            <template #btnFooter>
                <base-button outline color="danger" @click="isOpenModal = false">
                    close
                </base-button>
            </template>
        </base-modal>
        <base-show-more>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
            گرافیک
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی
            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
            نرم
            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
            در زبان
            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
            جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد
        </base-show-more>
        <Form :validation-schema="formSchema">
            <base-input name="phooneNumber" v-model="phooneNumber" label="email" type="text" />
        </Form>
    </div>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup"

const phooneNumber = ref("")
const formSchema = Yup.object({
    phooneNumber: Yup.string().required().min(11,"")
})
const isOpenModal = ref(false)
</script>

<style scoped></style>