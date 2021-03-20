import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import analytics from '@react-native-firebase/analytics';
import { Repository } from 'models';
import { RepositoryItem, Spinner } from 'components';
import {
  useGenericRoute,
  ScreenNames,
  useGenericNavigation,
} from 'navigationTypes';
import { useFetchUserRepos } from './hooks';

const keyExtractor = (item: Repository, index: number) => `${item}-${index}`;

export const RepositoryListScreen = () => {
  const {
    params: { username },
  } = useGenericRoute<typeof ScreenNames.Repositories>();
  const { isLoading, repos } = useFetchUserRepos(username);

  const navigation = useGenericNavigation();

  useEffect(() => {
    analytics().logEvent('view_repository_list');
  }, []);

  const renderItem = useCallback(
    ({
      item,
      item: {
        name,
        owner: { login, avatar_url: avatar },
      },
    }: ListRenderItemInfo<Repository>) => {
      return (
        <RepositoryItem
          name={name}
          owner={login}
          avatar={avatar}
          onPress={() => {
            navigation.navigate(ScreenNames.RepositoryDetails, { repo: item });
          }}
        />
      );
    },
    [navigation],
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        margin: 1,
      }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          data={repos}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};
