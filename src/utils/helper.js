import {put} from 'redux-saga/effects';

export function Put(actionFn, payload) {
    return function* (_action) {
        yield put(actionFn(payload || _action.payload));
    }
}
