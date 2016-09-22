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
import { uuid } from 'uuid';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class App {
  constructor() {
    store.appDidLoad = false;
    AsyncStorage.getItem('userKey').then((userId) => {
      if(uuid) {
        store.userKey = userId;
        store.isUserNew = false;
      }
      else {
        store.userKey = uuid.v4();
        store.isUserNew = true;
      }
    })
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Feed',
          screen: 'MovieHack.FeedTabScreen',
          title: 'Movies Feed',
        },
        {
          label: 'To Watch',
          screen: 'MovieHack.ToWatchTabScreen',
          title: 'To Watch',
        }
      ]
    });
  }
}
