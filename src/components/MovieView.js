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
  Animated,
} from 'react-native';

import {SwipeView} from 'react-native-swipe-view';
import BinaryToolbar from './BinaryToolbar';
import * as config from '../config';

const {height, width} = Dimensions.get('window');


export default class MovieView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bounceValue: new Animated.Value(0),
    }
  }

  static propTypes = {
    movie: PropTypes.object,
    onSwipeEvent: PropTypes.func
  };

  componentDidUpdate(preProps, nowProps) {
    this.state.bounceValue.setValue(1.2);
    Animated.spring(this.state.bounceValue, {
      toValue: 1,
      friction: 5,
    }).start();
  }

  render() {
    return (
      <Animated.View style={{transform: [{scale: this.state.bounceValue}]}}>
        <TouchableOpacity onPress={this._showMoreInfo.bind(this)}>
        <SwipeView
          changeOpacity
          style={styles.card}
          onSwipedOut={(data) => {
            if (data.nativeEvent.direction === 'right') {
              this.props.onSwipeEvent(this.props.movie, true);
            } else if (data.nativeEvent.direction === 'left') {
              this.props.onSwipeEvent(this.props.movie, false);
            }
          }}
        >
          <View style={{flex: 1, padding: 24,position: 'relative'}}>
            {/* Movie Title */}
            <Text style={{marginBottom: 12, color: '#fafafa',fontSize: 20, fontFamily: 'Helvetica', fontWeight: '700'}}>{this.props.movie.title}</Text>
            <Image
              style={styles.cardImage}
              source={{uri: `${config.TMDB_POSTER_BASE}${this.props.movie.poster_path}`}}
            />
            <BinaryToolbar style={{ position: 'absolute', left: 0, top: 0}} onClick={(userDidLike) => this.props.onSwipeEvent(this.props.movie, userDidLike)}/>
          </View>
        </SwipeView>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  _showMoreInfo() {
    this.props.navigator.showModal({
      screen: "MovieHack.MoreInfoScreen", // unique ID registered with Navigation.registerScreen
      title: "Movie Info", // title of the screen as appears in the nav bar (optional)
      passProps: {
        movieId: this.props.movie.id
      }, // simple serializable object that will pass as props to the modal (optional)
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
  card: {
    height: height-209,//Nav bar offset
    margin: 48,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: "#303030",
    borderRadius: 6,
  },
  cardImage: {
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
