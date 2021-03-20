import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum ScreenNames {
  Home = 'Home',
  Repositories = 'Repositories',
}

export type ScreenNavigationTypes = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Repositories]: {username: string};
};

type NavigationType = StackNavigationProp<ScreenNavigationTypes>;

export const useGenericNavigation = () => useNavigation<NavigationType>();

type RouteType<T extends ScreenNames> = RouteProp<ScreenNavigationTypes, T>;

export const useGenericRoute = <T extends ScreenNames>() =>
  useRoute<RouteType<T>>();
