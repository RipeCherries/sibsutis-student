import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Search } from '../../screens';

function SearchStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SearchStack'
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='GroupSchedule'
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
