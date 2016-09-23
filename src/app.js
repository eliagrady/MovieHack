/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Navigation } from 'react-native-navigation';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import {registerScreens} from './screens';
import { AsyncStorage } from 'react-native';

import * as appActions from './reducers/app/actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class App {
  constructor() {
    store.dispatch(appActions.appInitializedAction())
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Feed',
          screen: 'MovieHack.FeedTabScreen',
          title: 'Movies Feed',

          navigatorStyle: darkNavigatorStyle,
        },
        {
          label: 'To Watch',
          screen: 'MovieHack.ToWatchTabScreen',
          title: 'To Watch',
          navigatorStyle: darkNavigatorStyle,
        },
        {
          label: 'Test More Info Movie',
          screen: 'MovieHack.MoreInfoScreen',
          title: 'Movie Info',
        }
      ],
      navigatorStyle: darkNavigatorStyle,
      tabsStyle: darkTabBarStyle,
    });
  }
}

const darkNavigatorStyle = {

  navBarTextColor: '#f7f7f7',

  navBarBackgroundColor: '#303030',

};

const darkTabBarStyle = {
  tabBarBackgroundColor: '#303030',
  statusBarTextColorScheme: 'light'
};
