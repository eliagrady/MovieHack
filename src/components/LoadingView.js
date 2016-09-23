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
  //
  // /* eslint react/no-did-mount-set-state: 0 */
  // componentDidMount() {
  //   setTimeout(() => {
  //     dispatch({type: types.FETCH_MOVIES_FAILED, err});
  //   });
  // }

  render() {
    return (
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <View style={{height: 50, width: 400, marginTop:230}}>
          {/*<Spinner visible={this.state.visible} />*/}
          <Text style={{alignSelf: 'center', justifyContent: 'center', fontSize: 26, fontWeight: '700', color: '#ccc'}}>Loading data...</Text>
        </View>
      </View>
    );
  }

}
