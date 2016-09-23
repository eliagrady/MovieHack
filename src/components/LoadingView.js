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

import Spinner from 'react-native-loading-spinner-overlay';

export default class LoadingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };

  }

  render() {
    return (
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <View style={{height: 50, width: 400}}>
          <Spinner visible={this.state.visible} />
          {/*<Text style={{alignSelf: 'center', justifyContent: 'center', fontSize: 26}}>Loading</Text>*/}
        </View>
      </View>
    );
  }

}
