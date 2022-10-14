import React from "react";
import { render } from "@testing-library/react";
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import Info from '../AdminComponents/Info';
import Chart from '../AdminComponents/Chart';
import SmallBox from '../AdminComponents/SmallBox';
import BigBox from '../AdminComponents/BigBox';
import { BrowserRouter } from "react-router-dom";
import {store, persistor} from '../redux/store';
import{Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

it("matches snapshot", function () {
  const { asFragment } = render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
            <Sidebar />
            <Info/> 
            <SmallBox />
            <BigBox />
      </BrowserRouter>
    </PersistGate>
  </Provider>

  );
  expect(asFragment()).toMatchSnapshot();
});