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

import {connect} from 'react-redux';
import * as toWatchActions from '../reducers/toWatch/actions';
import _ from 'lodash';
import LoadingView from '../components/LoadingView';
import ToWatchView from '../components/ToWatchView';


class ToWatchTabScreen extends Component {
  componentDidMount() {
    this.props.dispatch(toWatchActions.fetchMoviesAction())
  }

  render() {
    if (this.props.toWatch.isLoading) {
      return (
        <View>
          <LoadingView />
        </View>
      );
    }

    else if (this.props.toWatch.err) {
      Alert.alert("Oh Oh, there was a terrible error...", JSON.stringify(this.props.toWatch.err))
    }

    return (
      <ScrollView
        style={styles.container}
      >
        {
          _.map(this.props.toWatch.movies, (movie) => {
            return (
              <ToWatchView
                navigator={this.props.navigator}
                key={movie.id}
                movie={movie}
              />
            );
          })

        }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ToWatchTabScreen);
