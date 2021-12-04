import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './sources/components/app';
import RootReducer from './sources/reducers';

const store = createStore(RootReducer);

const Component = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Component;