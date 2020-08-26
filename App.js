import React from 'react';
import { Container } from './components/Container';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>

        </Container>
      </PersistGate>
    </Provider>

  );
}

