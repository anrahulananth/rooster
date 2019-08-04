import { combineReducers } from "redux";
import tweetsReducer from "./tweetsReducer";
import loadingReducer from "./loadingReducer";
import pageReducer from './pageReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    tweets: tweetsReducer,
    isLoading: loadingReducer,
    error: errorReducer,
    page: pageReducer
});
