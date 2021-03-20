import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, RepositoryListScreen} from 'screens';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenNames} from 'navigationTypes';

const AppStack = createStackNavigator();

export const AppNavigator = () => (
  <SafeAreaView style={{flex: 1}}>
    <AppStack.Navigator>
      <AppStack.Screen name={ScreenNames.Home} component={HomeScreen} />
      <AppStack.Screen
        name={ScreenNames.Repositories}
        component={RepositoryListScreen}
      />
    </AppStack.Navigator>
  </SafeAreaView>
);
