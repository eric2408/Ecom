import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {store, persistor} from './redux/store';
import{Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

describe('App component', () => {
  test("renders without crashing", () => {
    render(
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    );
  });
 })