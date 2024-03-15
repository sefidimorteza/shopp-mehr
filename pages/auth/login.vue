<template>
    <div class="auth-container">
        <div class="auth-title mb-3">ورودبه حساب کاربری</div>
        <div class="auth-box ui-box">
            <Form @submit="login" :validation-schema="loginSchema" class="form-group" v-slot="{ meta }">
                <base-input name="phoneNumber" type="text" class="mb-3" label="شماره تلفن"
                    placeholder="شماره موبایل خود را وارد کنید" v-model="loginData.phoneNumber" />
                <base-input name="password" type="password" class="mb-3" label="رمز عبور"
                    placeholder="رمز عبور خود را وارد کنید" v-model="loginData.password" />
                <div class="form-element-row mb-3">
                    <base-button w-full :disabled="meta.valid == false" :isloading="loading"
                        inputName="ورود به حساب"></base-button>
                </div>
                <div class="form-element-row">
                    <div>حساب کاربری ندارید؟<nuxt-link to="/auth/register" class="link">ثبت نام
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
import * as Yup from "yup";
import { loginUser } from "~/services/auth.service";
definePageMeta({
    layout: 'auth'
})
useHead({
    title: "ورودبه حساب کاربری"
})

const loading = ref(false)

const loginData = reactive({
    phoneNumber: "",
    password: ""
})
const loginSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .min(11, 'شماره تلفن اشتباه است')
        .max(11, 'شماره تلفن اشتباه است')
        .required('تلفن باید وارد شود '),
    password: Yup.string()
        .required()
        .min(8, 'رمز عبور نمیتواند از 8 رقم کمتر باشد'),
})
const router = useRouter()
const login = async (data: any, formEvent: any) => {
    loading.value = true;
    var result = await loginUser(loginData.phoneNumber, loginData.password);
    loading.value = false;
    if (result.isSuccess) {
        localStorage.setItem("auth-data", JSON.stringify(result.data));
        router.push("/")
    } else {
        formEvent.setFieldError("phoneNumber", "کاربری با مشخصات زیر یافت نشد")

    }
}
</script>

<style scoped></style>\