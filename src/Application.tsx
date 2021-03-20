import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from 'routes';

export const Application = () => (
  <NavigationContainer
  // onStateChange={async state => {
  //   // console.log('state', state?.routeNames[state?.index]);
  // }}>
  >
    <AppNavigator />
  </NavigationContainer>
);
