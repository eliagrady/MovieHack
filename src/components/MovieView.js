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

  componentDidUpdate() {
    this.state.bounceValue.setValue(1.2);
    Animated.spring(this.state.bounceValue, {
      toValue: 1,
      friction: 5,
    }).start();
  }

  render() {
    return (
      <Animated.View style={{transform: [{scale: this.state.bounceValue}]}}>
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
          <View style={{flex: 1, padding: 24,}}>
            {/* Movie Title */}
            <Text style={{marginBottom: 12, color: '#fafafa',fontSize: 20, fontFamily: 'Helvetica', fontWeight: '700'}}>{this.props.movie.title}</Text>
            <Image
              style={styles.cardImage}
              source={{uri: `${config.TMDB_POSTER_BASE}${this.props.movie.poster_path}`}}
            />
          </View>
        </SwipeView>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: height-209,//Nav bar offset
    margin: 48,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: "#303030",
  },
  cardImage: {
    flex: 1,
    resizeMode: 'cover',
  }
});
