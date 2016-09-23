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


export default class BinaryToolbar extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    onClick: PropTypes.func
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.onClick(false)}><Image style={{width: 50}} source={{uri: "https://thecinemascoredotcom.files.wordpress.com/2016/01/thumbsup.png?w=474"}} /></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onClick(true)}><Image style={{width: 50}} source={{uri: "http://www.clker.com/cliparts/5/2/5/8/13476359851958638477thumbs-down-icon-red-hi-md.png"}} /></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  }
});
