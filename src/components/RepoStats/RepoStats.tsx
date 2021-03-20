import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface RepoStatsProps {
  stars: number;
  forks: number;
}

export const RepoStats = ({ stars, forks }: RepoStatsProps) => {
  return (
    <View style={styles.container}>
      {stars ? <Text>{`${stars} stars`}</Text> : null}
      {forks ? <Text>{`${forks} forks`}</Text> : null}
    </View>
  );
};
