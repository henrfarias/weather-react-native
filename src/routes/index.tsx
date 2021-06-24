import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { StackParamsList } from '../types/StackParams';

import Weather from '../screens/Weather';

const Stack = createStackNavigator<StackParamsList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Weather' component={Weather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;