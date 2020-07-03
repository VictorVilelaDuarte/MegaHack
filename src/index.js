import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import App from './App';

export default function src() {
  return (
    <>
      <StatusBar backgroundColor="#3b131a" barStyle="dark-content" />
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </>
  );
}
