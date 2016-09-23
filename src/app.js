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
import * as firebaseActions from './reducers/firebase/actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class App {
  constructor() {
    store.dispatch(appActions.appInitializedAction());
    store.dispatch(firebaseActions.fetchFromFirebase());
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
          label: 'My Watch List',
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
  navBarTextColor: '#f7f7f7', // change the text color of the title (remembered across pushes)
  navBarBackgroundColor: '#303030', // change the background color of the nav bar (remembered across pushes)
  navBarButtonColor: '#007aff', // change the button colors of the nav bar (eg. the back button) (remembered across pushes)
  navBarHidden: false, // make the nav bar hidden
  navBarHideOnScroll: false, // make the nav bar hidden only after the user starts to scroll
  navBarTranslucent: false, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
  navBarTransparent: false, // make the nav bar transparent, works best with drawUnderNavBar:true
  navBarNoBorder: false, // hide the navigation bar bottom border (hair line)
  drawUnderNavBar: false, // draw the screen content under the nav bar, works best with navBarTranslucent:true
  drawUnderTabBar: false, // draw the screen content under the tab bar (the tab bar is always translucent)
  statusBarBlur: false, // blur the area under the status bar, works best with navBarHidden:true
  navBarBlur: false, // blur the entire nav bar, works best with drawUnderNavBar:true
  tabBarHidden: false, // make the screen content hide the tab bar (remembered across pushes)
  statusBarHideWithNavBar: false, // hide the status bar if the nav bar is also hidden, useful for navBarHidden:true
  statusBarHidden: false, // make the status bar hidden regardless of nav bar state
  statusBarTextColorScheme: 'dark' // text color of status bar, 'dark' / 'light' (remembered across pushes)
};

const darkTabBarStyle = {
  tabBarBackgroundColor: '#303030',
  tabBarButtonColor: '#ccc',
  tabBarSelectedButtonColor: '#fff',
  statusBarTextColorScheme: 'light'
};
