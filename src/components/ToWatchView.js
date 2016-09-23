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
    onSwipeEvent: PropTypes.func
  };

  render() {
    return (
      <View
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
      </View>
    );
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
