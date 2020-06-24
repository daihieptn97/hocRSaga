import {all, fork, takeEvery, takeLatest, put, take, call} from 'redux-saga/effects';

import {countDownSaga} from './actionDemo';
import {UP_COUNT} from '../constants';

export function* rootSaga() {
    console.log('hello saga');
    // yield fork(decreaseCounter);
    yield takeLatest(UP_COUNT, countDownSaga);
}

/*
// Decrease Counter Async
function* decreaseCounter() {

    // const dispatch = useDispatch();
    yield take(UP_COUNT);
    // put({type: 'INCREMENT'});
    let res = yield call(apiFetchDemo);
    yield put(upCount(10));
    console.log('api res: ', res);

    // console.log('decreaseCounter');
    // try {
    //     console.log('decreaseCounter');
    //     // Delay 4 Seconds
    //     // yield delay(4000);
    //
    //     // Dispatch Action To Redux Store
    //     yield put({
    //         type: UP_COUNT,
    //         val: 1,
    //     });
    // } catch (error) {
    //     console.log(error);
    // }
}
*/

