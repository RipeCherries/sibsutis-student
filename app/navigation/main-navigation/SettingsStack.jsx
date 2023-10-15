import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Settings, Search } from '../../screens';

function SearchStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsStack"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SettingsSearch"
        component={Search}
        options={{
          headerShown: false,
        }}
        initialParams={{ context: 'changeGroup' }}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
