import React from 'react';
import NavScreens from './navigation/NavScreens';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    // <Provider store={store}>
    <NavScreens />
    // </Provider>
  );
};

export default App;
