import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Video from './pages/Video';
import Categories from './pages/Categories';
import List from './pages/List';
import Service from './pages/Service';
import Confirm from './pages/Confirm';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Service" component={Service} />
        <Stack.Screen name="Confirm" component={Confirm} />
        <Stack.Screen name="Video" component={Video} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
