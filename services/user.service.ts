import type { ApiResponse } from "~/models/ApiResponse";
import type { userDTo } from "~/models/users/userDTO";
import { FetchApi } from "~/utilities/CoustomFetch";

export const GetCurrentUser = (): Promise<ApiResponse<userDTo>> => {
    return FetchApi("/Users/Current")
}