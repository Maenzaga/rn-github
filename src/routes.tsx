import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, RepositoryListScreen } from 'screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenNames, ScreenNavigationTypes } from 'navigationTypes';
import { RepositoryDetailsScreen } from 'screens/RepositoryDetailsScreen';
import { Route } from '@react-navigation/native';

const AppStack = createStackNavigator();

export const AppNavigator = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <AppStack.Navigator>
      <AppStack.Screen name={ScreenNames.Home} component={HomeScreen} />
      <AppStack.Screen
        name={ScreenNames.Repositories}
        component={RepositoryListScreen}
      />
      <AppStack.Screen
        name={ScreenNames.RepositoryDetails}
        component={RepositoryDetailsScreen}
        options={props => {
          const typedRoute = props.route as Route<
            ScreenNames.RepositoryDetails,
            ScreenNavigationTypes['RepositoryDetails']
          >;

          return {
            headerTitle: typedRoute.params.repo.name,
          };
        }}
      />
    </AppStack.Navigator>
  </SafeAreaView>
);
