import { TWEETS } from '../constants';

export default function pageReducer (state = { _start : 0, _limit: 10, q:'' }, action) {
    switch (action.type) {
        case TWEETS.FETCH_TWEETS_SUCCESS: return {
            _start: action.page._start,
            _limit: action.page._limit,
            q: action.page.q
        };
        default: return state;
    }
}
