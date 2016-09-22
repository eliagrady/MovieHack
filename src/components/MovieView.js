import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window')

import {SwipeView} from 'react-native-swipe-view';

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
        <Text style={{color: '#fafafa',}}>{this.props.movie.title}</Text>
      </SwipeView>
    );
  }

}

const styles = StyleSheet.create({
  card: {
    height: 70*height/100,
    margin: 48,
    marginLeft: 24,
    marginRight: 24,
    padding: 24,
    backgroundColor: "#303030"
  }
});
