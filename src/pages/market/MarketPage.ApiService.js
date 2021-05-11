import {publicApi} from "../../utils/api";

class MarketPageApiService {
    getBooksList() {
        return publicApi.get(`/books/`);
    }

    getBookInfo(bookId) {
        return publicApi.get(`/books/byid?id=${bookId}`);
    }

    getBookComments(bookId) {
        return publicApi.get(`/comments/bybookid?id=${bookId}`);
    }

    buyBook({bookId, userId}) {
        // return publicApi.post(`/books/buy`, {bookId, userId});
    }
}

export const marketApiService = new MarketPageApiService();
