import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { StackParamsList } from '../types/StackParams';

import Weather from '../screens/Weather';
import Search from '../screens/Search';

const Stack = createStackNavigator<StackParamsList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Search' 
          component={Search} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;