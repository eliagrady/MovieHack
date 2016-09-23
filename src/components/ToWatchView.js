import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
} from 'react-native';

import {SwipeView} from 'react-native-swipe-view';
import * as config from '../config';

const {height, width} = Dimensions.get('window');


export default class MovieView extends Component {
  constructor(props) {
    super(props)

  }

  static propTypes = {
    movie: PropTypes.object,
    onSwipeEvent: PropTypes.func,
    navigator: PropTypes.object
  };

  render() {
    return (
      <TouchableOpacity onPress={this._showMoreInfo.bind(this)}>
      <SwipeView
        onSwipedOut={(event) => this.props.onSwipeEvent()}
        style={styles.item}
      >
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: Dimensions.get('window').width,
            height: 180,
            zIndex: 1,
            backgroundColor: 'rgba(0,0,0,.4)'
          }}>
            <Text style={{
              margin: 15,
              marginBottom: 10,
              color: '#fafafa',
              fontSize: 20,
              fontFamily: 'Helvetica',
              fontWeight: '700'
            }}>{this.props.movie.title}</Text>
            <Text style={{
              marginLeft: 15,
              color: '#C7C7C7',
              fontSize: 13,
              fontFamily: 'Helvetica',
            }}>{`Rating: ${this.props.movie.vote_average}`}</Text>
          </View>
          <Image
            style={styles.image}
            source={{uri: `${config.TMDB_POSTER_BASE}${this.props.movie.poster_path}`}}
          />
      </SwipeView>
      </TouchableOpacity>
    );
  }

  _showMoreInfo() {
    this.props.navigator.showModal({
      screen: "MovieHack.MoreInfoScreen", // unique ID registered with Navigation.registerScreen
      title: "Movie Info", // title of the screen as appears in the nav bar (optional)
      passProps: {
        movieId: this.props.movie.id
      }, // simple serializable object that will pass as props to the modal (optional)
      navBarTextColor: '#000000',
      navigatorButtons: {
        leftButtons: [
          {
            title: 'Cancel',
            id: 'cancel',
            disableIconTint: true,
          }
        ]
      },
      navigatorStyle: darkNavigatorStyle,
      animationType: 'slide-up'
    });
  }
}

const styles = StyleSheet.create({
  item: {
    height: 180,
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  }
});

const darkNavigatorStyle = {
  navBarTextColor: '#f7f7f7', // change the text color of the title (remembered across pushes)
  navBarBackgroundColor: '#920009', // change the background color of the nav bar (remembered across pushes)
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
