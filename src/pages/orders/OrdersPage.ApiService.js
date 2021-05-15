import {publicApi} from "../../utils/api";

class OrdersPageApiService {
    getOrdersList(userId) {
        return publicApi.get(`/books/byuserpaid?id=${userId}`);
    }

    getOrderInfo({userId, bookId}) {
        return publicApi.get(`/books/byuserbybookpaid?id=${userId}&bookid=${bookId}`);
    }
}

export const ordersApiService = new OrdersPageApiService();