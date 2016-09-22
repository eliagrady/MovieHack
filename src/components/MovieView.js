import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';

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
    flex: 1,
    margin: 48,
    marginLeft: 24,
    marginRight: 24,
    padding: 24,
    backgroundColor: "#303030"
  }
});
