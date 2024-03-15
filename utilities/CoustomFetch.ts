import type { FetchError, FetchOptions } from "ohmyfetch";
import { AppStatusCode, type ApiResponse } from "~/models/ApiResponse";

export function FetchApi<T>(
    URL: string,
    config: FetchOptions = {},
): Promise<ApiResponse<T>> {
    config = {
        baseURL: "https://shop-api.codeyad-project.ir/api/",
        ...config,
    }
    const authStore = useAuthStore()
    if (!config.headers) {
        config.headers = {}
    }
    if (authStore && authStore.isLogin) {
        const loginData = authStore.loginResult
        //@ts-ignore
        config.headers["Authorization"] = `Bearer ${loginData?.token}`;
    }
    //@ts-ignore
    return $fetch<ApiResponse<T>>(URL, config)
        .then((res) => {
            return res
        }).catch((e: FetchError) => {
            return {
                data: null,
                isSuccess: false,
                metaData: {
                    appStatusCode:
                        e.response?._data?.MetaData?.MetaData ??
                        AppStatusCode.ServerError,
                    message:
                        e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده",
                }
            }
        })
}