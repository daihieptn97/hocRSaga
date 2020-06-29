import {take, put} from 'redux-saga/effects';
import {UP_COUNT} from '../../constants';
import {downCount} from '../actions/countAction';

export function* countDownSaga(val = 1) {
    yield take(UP_COUNT);
    yield put(downCount(20));
}

export function* SagaCM1(res) {
    console.log(res);
}
