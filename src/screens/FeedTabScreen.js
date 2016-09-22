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

import MovieView from '../components/MovieView';
import LoadingView from '../components/LoadingView';

import {connect} from 'react-redux';
import * as feedActions from '../reducers/feed/actions';
import _ from 'lodash';


class FeedTabScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showedMovieIndex: 0,
    };
  }

  componentDidMount() {
    this.props.dispatch(feedActions.fetchMoviesAction())
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.feed.movies.length === 0 ? <LoadingView /> :
          <MovieView
            movie={this.props.feed.movies[this.state.showedMovieIndex]}
            user={this.props.app.userId}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#505050',

    color: '#fafafa',
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
