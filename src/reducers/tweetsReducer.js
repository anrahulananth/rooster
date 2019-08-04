import {TWEETS} from '../constants';

export default function tweetsReducer (state = [], action) {
    switch (action.type) {
        case TWEETS.FETCH_TWEETS_SUCCESS: 
        if(action.page._start !== 0){
            return [...state, ...action.tweets];
        } else {
            return [...action.tweets];
        }
        default:  return state;
    }
}
