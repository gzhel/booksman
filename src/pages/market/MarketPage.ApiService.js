import {publicApi} from "../../utils/api";

class MarketPageApiService {
    getBooksList() {
        return publicApi.get(`/books/separated?from=100&to=123`);
    }

    getBookInfo(bookId) {
        return publicApi.get(`/books/byid?id=${bookId}`);
    }

    getBookComments(bookId) {
        return publicApi.get(`/comments/bybookid?id=${bookId}`);
    }

    buyBook({bookId, userId, postId}) {
        return publicApi.get(`/bills/buybook?bookid=${bookId}&userid=${userId}&postid=${postId}`);
    }
}

export const marketApiService = new MarketPageApiService();
