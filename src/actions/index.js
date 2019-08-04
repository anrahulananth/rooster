
import { TWEETS } from '../constants';

const fetchTweets = page => {
    return {
        type: TWEETS.FETCH_TWEETS,
        page
    }
}

const fetchNextTweets = page => {
    return {
        type: TWEETS.FETCH_TWEETS,
        page: {
            _start: page._limit,
            _limit: page._limit + 50,
            q: page.q
        }
    }
}

const setTweets = tweets => {
    return {
        type: TWEETS.FETCH_TWEETS_SUCCESS,
        tweets
    }
}

const setError = error => {
    return {
        type: TWEETS.FETCH_TWEETS_FAILURE,
        error
    }
}

export {
    fetchTweets,
    fetchNextTweets,
    setTweets,
    setError
}