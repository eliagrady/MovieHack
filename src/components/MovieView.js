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
    movie: PropTypes.object
  };

  render() {
    return (
      <SwipeView style={styles.card}>
        {/* Movie Title */}
        <Text style={{color: '#fafafa',fontSize: 20, fontFamily: 'Helvetica', fontWeight: '700'}}>{this.props.movie.title}</Text>
        <Image
          style={styles.cardImage}
          source={{uri: `${config.TMDB_POSTER_BASE}${this.props.movie.poster_path}`}}
        />
      </SwipeView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: height-209,//Nav bar offset
    margin: 48,
    marginLeft: 24,
    marginRight: 24,
    padding: 0,
    backgroundColor: "#303030"
  },
  cardImage: {
    flex: 1,
    resizeMode: 'cover',
  }
});
