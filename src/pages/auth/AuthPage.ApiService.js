import {publicApi} from "../../utils/api";

class AuthPageApiService {
    signIn(authFields) {
        return publicApi.post(`/users/login`, authFields);
    }
}

export const authApiService = new AuthPageApiService();