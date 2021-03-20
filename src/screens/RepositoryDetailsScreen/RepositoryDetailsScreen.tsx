import { RepoStats } from 'components';
import { ScreenNames, useGenericRoute } from 'navigationTypes';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export const RepositoryDetailsScreen = () => {
  const {
    params: { repo },
  } = useGenericRoute<typeof ScreenNames.RepositoryDetails>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{repo.name}</Text>
      <Text>{repo.description}</Text>
      <RepoStats stars={repo.stargazers_count} forks={repo.forks_count} />
    </View>
  );
};
