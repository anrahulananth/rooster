import { put, takeEvery, all, call } from "redux-saga/effects";
import { TWEETS } from '../constants'
import axios from "axios";

const fetchTweets = function* fetchTweets (action) {
    try {
        const { page: { _start, _limit, q } } = action;
        const tweets = yield call(fetchTweetsData, _start, _limit, q);
        yield put({ type: TWEETS.FETCH_TWEETS_SUCCESS, tweets, page: action.page });
    } catch (error) {
        yield put({ type: TWEETS.FETCH_TWEETS_FAILURE, error });
    }
};

const watchFetchTweets = function* watchFetchTweets () {
    yield takeEvery(TWEETS.FETCH_TWEETS, fetchTweets);
};

const rootSaga = function* rootSaga () {
    yield all([
        watchFetchTweets(),
    ]);
};

const fetchTweetsData = (start, limit, q) => {
    let reqURL = `https://roosterfakeapi.herokuapp.com//tweets?${q && q !== '' ? `&q=${q}&` : ''}_start=${start}&_limit=${limit}`;
    return axios.get(reqURL).then(response => {
        return response.data;
    });
};

export default rootSaga;



