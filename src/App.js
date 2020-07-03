import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#FDDC13" barStyle="dark-content" />
      <Routes />
    </>
  );
}
