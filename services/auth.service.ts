import type { ApiResponse } from "~/models/ApiResponse";
import type { loginResultDto } from "~/models/auth/loginDTO";
import type { RegisterCommandDTO } from "~/models/auth/registerDTO";
import { FetchApi } from "~/utilities/CoustomFetch";

export function registerUser(commend: RegisterCommandDTO): Promise<ApiResponse<undefined>> {
    return FetchApi("/auth/register", {
        method: "post",
        body: commend
    })
}
export function loginUser(phoneNumber: string, password: string): Promise<ApiResponse<loginResultDto>> {
    return FetchApi("/auth/login", {
        method: "post",
        body: {
            phoneNumber: phoneNumber,
            password: password
        }
    })
}