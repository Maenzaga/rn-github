import React from 'react';
import { ActivityIndicator, ViewProps } from 'react-native';

export const Spinner = ({ style }: Pick<ViewProps, 'style'>) => (
  <ActivityIndicator style={style} color="red" size="large" />
);
