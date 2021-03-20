import React, {PropsWithChildren} from 'react';
import {View, Text, Image, ViewProps} from 'react-native';
import styles from './styles';

type RepositoryItemProps = {
  name: string;
  owner: string;
  avatar?: string;
} & Pick<ViewProps, 'style'>;

type Props = PropsWithChildren<RepositoryItemProps>;

export const RepositoryItem = ({
  name,
  owner,
  avatar,
  style,
  children,
}: Props) => (
  <View style={[styles.container, style]}>
    <Image source={{uri: avatar}} style={styles.avatar} />
    <View>
      <Text style={styles.owner}>{owner}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
    {children}
  </View>
);
