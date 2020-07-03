import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import App from './App';

export default function src() {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          backgroundColor="#FDDC13"
          barStyle="dark-content"
          translucent
        />
        <App />
      </SafeAreaProvider>
    </>
  );
}
