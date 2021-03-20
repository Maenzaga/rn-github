import React, { useEffect } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import analytics from '@react-native-firebase/analytics';
import { Repository } from 'models';
import { RepositoryItem, Spinner } from 'components';
import { useGenericRoute, ScreenNames } from 'navigationTypes';
import { useFetchUserRepos } from './hooks';

const renderItem = ({
  item: {
    name,
    owner: { login, avatar_url },
  },
}: ListRenderItemInfo<Repository>) => {
  return <RepositoryItem name={name} owner={login} avatar={avatar_url} />;
};

const keyExtractor = (item: Repository, index: number) => `${item}-${index}`;

export const RepositoryListScreen = () => {
  const {
    params: { username },
  } = useGenericRoute<typeof ScreenNames.Repositories>();
  const { isLoading, repos } = useFetchUserRepos(username);

  useEffect(() => {
    analytics().logEvent('view_repository_list');
  }, []);

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
