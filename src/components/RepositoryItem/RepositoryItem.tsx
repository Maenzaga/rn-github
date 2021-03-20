import React from 'react';
import { View, Text, Image, ViewProps, TouchableOpacity } from 'react-native';
import styles from './styles';

type RepositoryItemProps = {
  name: string;
  owner: string;
  avatar?: string;
  onPress: () => void;
} & Pick<ViewProps, 'style'>;

export const RepositoryItem = ({
  name,
  owner,
  avatar,
  onPress,
  style,
}: RepositoryItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, style]}>
      {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
      <View>
        <Text style={styles.owner}>{owner}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
