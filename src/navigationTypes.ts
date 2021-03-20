import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Repository } from 'models';

export enum ScreenNames {
  Home = 'Home',
  Repositories = 'Repositories',
  RepositoryDetails = 'RepositoryDetails',
}

export type ScreenNavigationTypes = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Repositories]: { username: string };
  [ScreenNames.RepositoryDetails]: { repo: Repository };
};

export type NavigationType = StackNavigationProp<ScreenNavigationTypes>;

export const useGenericNavigation = () => useNavigation<NavigationType>();

export type RouteType<T extends ScreenNames> = RouteProp<
  ScreenNavigationTypes,
  T
>;

export const useGenericRoute = <T extends ScreenNames>() =>
  useRoute<RouteType<T>>();
