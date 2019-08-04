import { TWEETS } from '../constants';

export default function loadingReducer (state = false, action) {
    switch (action.type) {
        case TWEETS.FETCH_TWEETS:
            return true;
        case TWEETS.FETCH_TWEETS_SUCCESS:
            return false;
        case TWEETS.FETCH_TWEETS_FAILURE:
            return false;
        default: return state;
    }
}
