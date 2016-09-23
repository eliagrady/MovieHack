import * as types from './actionTypes';
import { fbService } from '../../services/firebase';
import { AsyncStorage } from 'react-native';

export function connectToFirebase() {
  return async function(dispatch, getState) {
    try {
      dispatch({type: types.FIREBASE_CONNECT_LOADING});
      fbService.connect()
      const users = await fbService.db.ref('users').once('value');
      fbService.listenToChanges('users', (users) => {
        dispatch({type: types.FIREBASE_DATA_CHANGED, users})
      })
      dispatch({type: types.FIREBASE_CONNECT_SUCCESS, users});
    } catch (err) {
      console.error(err, 'Some error at firebase')
      dispatch({type: types.FIREBASE_CONNECT_FAILURE, err})
    }
  }
}

export function saveUserRatingsToFirebase() {
  return async function(dispatch, getState) {
    const userId = await AsyncStorage.getItem('userId');
    const userRef = db.child(userId);
    dispatch({type: types.FIREBASE_MOVIES_SAVING});
    userRef.set('userRatings', (err) => {
      dispatch({type: types.FIREBASE_MOVIES_SAVED});
    });
  }
}

export function getUserRatingsFromFirebase() {
  return async function(dispatch, getState) {
    const userId = await AsyncStorage.getItem('userId');
    const userRef = db.child(userId);
    const userRatings = userRef.get('userRatings');
    dispatch({type: types.FIREBASE_MOVIES_SAVING, userRatings});
  }
}
