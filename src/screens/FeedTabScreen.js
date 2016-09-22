import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions
} from 'react-native';

import MovieView from '../components/MovieView';
import LoadingView from '../components/LoadingView';

import {connect} from 'react-redux';
import * as feedActions from '../reducers/feed/actions';
import _ from 'lodash';

const {height, width} = Dimensions.get('window');

class FeedTabScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.props.dispatch(feedActions.fetchMoviesAction())
  }

  render() {
    if (this.props.feed.isLoading) {
      return (
        <View>
          <LoadingView />
        </View>
      )
    }

    else if (this.props.feed.err) {
      Alert.alert("Oh Oh, there was a terrible error...", JSON.stringify(this.props.feed.err))
    }

    return (
      <ScrollView
        style={styles.container}
        pagingEnabled={true}
        // contentInset={{top: 60}}
        // contentOffset={{y: -60}}
      >
        {
          _.map(this.props.feed.movies, (movie) => {
            return (
              <MovieView
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
    backgroundColor: '#505050',
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

export default connect(mapStateToProps)(FeedTabScreen);
