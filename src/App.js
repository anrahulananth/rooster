import React, {Fragment} from 'react';
import { Provider } from "react-redux";
import store from "./store";
import SearchBar from './components/search';
import TweetsContainer from './components/container';
import { Footer } from './components/footer';
function App () {
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <TweetsContainer />
        <Footer></Footer>
      </Fragment>
    </Provider>
  );
}

export default App;
