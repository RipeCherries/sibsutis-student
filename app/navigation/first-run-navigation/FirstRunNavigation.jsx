import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../../screens/start/Start';
import { Search } from '../../screens';

function FirstRunNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="SearchStart" component={Search} initialParams={{ context: 'firstRun' }} />
    </Stack.Navigator>
  );
}

export default FirstRunNavigation;
