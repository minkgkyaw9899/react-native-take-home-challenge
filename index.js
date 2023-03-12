import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from 'app/App';
import store, {persistor} from 'store';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <App />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
