import { AppStatusCode } from "~/models/ApiResponse"
import type { loginResultDto } from "~/models/auth/loginDTO"
import type { userDTo } from "~/models/users/userDTO"
import { GetCurrentUser } from "~/services/user.service"

export const useAuthStore = defineStore("auth", () => {
    const loginResult: Ref<loginResultDto | null> = ref(null)
    const currentUser: Ref<userDTo | null> = ref(null)
    const loading = ref(false)

    const isLogin = computed(() => loginResult.value != null)


    const SetCurrentUserValue = async () => {
        const localStoregData = localStorage.getItem("auth-data");
        if (!localStoregData) {
            return;
        }
        const loginData = JSON.parse(localStoregData);
        loginResult.value = loginData;
        loading.value = true;
        var result = await GetCurrentUser();
        if (result.isSuccess) {
            currentUser.value = result.data;
        } else if (result.metaData.appStatusCode == AppStatusCode.UnAuthorize) {
            loginResult.value = null;
            localStorage.removeItem("auth-data");
        }
        loading.value = false;
    };

    return {
        loading,
        loginResult,
        currentUser,
        SetCurrentUserValue,
        isLogin,
    };
})