<template>
    <div class="auth-container">
        <div class="auth-title mb-3">ثبت نام در سایت</div>
        <div class="auth-box ui-box">
            <Form @submit="register" :validation-schema="registerSchema" class="form-group" v-slot="{ meta }">
                <base-input name="phoneNumber" type="text" class="mb-3" label="شماره تلفن"
                    placeholder="شماره موبایل خود را وارد کنید" v-model="registerData.phoneNumber" />
                <base-input name="password" type="password" class="mb-3" label="رمز عبور"
                    placeholder="رمز عبور خود را وارد کنید" v-model="registerData.password" />
                <base-input name="confirmPassword" type="password" class="mb-3" label="تکرار رمز عبور"
                    placeholder="تکرار رمز عبور" v-model="registerData.confirmPassword" />
                <div class="form-element-row mb-3">
                    <base-button :disabled="meta.valid == false" :isloading="loading" class="btn btn-primary"
                        inputName=" به حساب کاربری">
                    </base-button>

                </div>

                <div class="form-element-row">
                    <div>حساب کاربری دارید؟<nuxt-link to="/auth/login" class="link">ثبت نام
                        </nuxt-link>
                    </div>
                </div>
                <hr />
                <div class="form-element-row">
                    <div>با ورود و یا ثبت نام در سایت شما <a href="#" class="link">شرایط و
                            قوانین</a> استفاده
                        از تمام سرویس های
                        سایت و <a href="#" class="link">قوانین حریم خصوصی</a> آن را می‌پذیرید.
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import type { RegisterCommandDTO } from "~/models/auth/registerDTO";
import { registerUser } from "~/services/auth.service";
import * as Yup from "yup";

const loading = ref(false)

definePageMeta({
    layout: 'auth'
})
useHead({
    title: "ثبت نام در سایت"
})
const registerData: RegisterCommandDTO = reactive({
    phoneNumber: "",
    password: "",
    confirmPassword: ""
})
const registerSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .min(11, 'شماره تلفن اشتباه است')
        .max(11, 'شماره تلفن اشتباه است')
        .required('تلفن باید وارد شود '),
    password: Yup.string()
        .required()
        .min(8, 'رمز عبور نمیتواند از 8 رقم کمتر باشد'),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "کلمه عبور یکسان نیستند"),
})
const router = useRouter()
const register = async () => {
    loading.value = true;
    const result = await registerUser(registerData)
    loading.value = false;
    if (result.isSuccess) {
        router.push('/auth/login')
        //toast
    } else {
        //toast
        alert(result.metaData.message)
    }

}
</script>

<style scoped></style>\