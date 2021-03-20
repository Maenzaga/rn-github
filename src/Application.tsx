import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from 'routes';

export const Application = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);
