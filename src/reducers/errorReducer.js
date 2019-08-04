import { TWEETS } from '../constants';

export default function errorReducer (state = null, action) {
    switch (action.type) {
        case TWEETS.FETCH_TWEETS_FAILURE: 
            return action.error;
        case TWEETS.FETCH_TWEETS_LOAD:
        case TWEETS.FETCH_TWEETS_SUCCESS:
            return null
        default: return state;
    }
}