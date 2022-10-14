import React from "react";
import { render } from "@testing-library/react";
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Popproducts from '../Components/Popproducts'
import Sliders from '../Components/Sliders'
import Subscription from '../Components/Subscription'
import Features from '../Components/Features'
import { BrowserRouter } from "react-router-dom";
import {store, persistor} from '../redux/store';
import{Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

it("matches snapshot", function () {
  const { asFragment } = render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
            <Announcement />
            <Navbar />
            <Sliders />
            <Features />
            <Categories />
            <Popproducts />
            <Subscription />
            <Footer />
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>

  );
  expect(asFragment()).toMatchSnapshot();
});