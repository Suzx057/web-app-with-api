import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../redux/configureStore'

const { store, persistor } = configureStore()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
        
    </Provider>
  );
};

export default App;
