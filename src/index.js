import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import App from './App';

export default function src() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
