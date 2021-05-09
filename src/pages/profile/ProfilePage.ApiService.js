import {publicApi} from "../../utils/api";

class ProfilePageApiService {
    getUserInfo(userId) {
        return publicApi.get(`/users/${userId}`);
    }

    getUserOrders(userId) {
        return publicApi.get(`/books/byuserarrived?id=${userId}`);
    }

    getSelectedBookInfo(bookId) {
        return publicApi.get(`/books/byid?id=${bookId}`);
    }

    getSelectedBookComments(bookId) {
        return publicApi.get(`/comments/bybookid?id=${bookId}`);
    }

    addCash({cashValue, userId}) {
        return publicApi.get(`/users/changecash?id=${userId}&cash=${cashValue}`);
    }
}

export const profileApiService = new ProfilePageApiService();