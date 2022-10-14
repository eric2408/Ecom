import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {store, persistor} from '../redux/store';
import{Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Register from './Register'

it("matches snapshot", function () {
  const { asFragment } = render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </PersistGate>
  </Provider>

  );
  expect(asFragment()).toMatchSnapshot();
});