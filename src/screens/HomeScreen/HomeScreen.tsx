import React from 'react';
import { View, Button } from 'react-native';
import { useGenericNavigation, ScreenNames } from 'navigationTypes';
import styles from './styles';

export const HomeScreen = () => {
  const navigation = useGenericNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Repositories"
        onPress={() => {
          navigation.navigate(ScreenNames.Repositories, {
            username: 'phanghos',
          });
        }}
      />
    </View>
  );
};
