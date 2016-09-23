import * as types from './actionTypes';
import db from '../../services/firebase';
import { AsyncStorage } from 'react-native';

export function fetchFromFirebase() {
  return async function(dispatch, getState) {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const userRef = db.child(userId);
      dispatch({type: types.FIREBASE_MOVIES_FETCHING});
      const userRatingsCollection = await userRef.once('value');
      if(userRatingsCollection) {
        dispatch({type: types.FIREBASE_MOVIES_FETCHED, userRatingsCollection})
      }
    } catch (err) {
      console.warn(err);
      dispatch({type: types.FIREBASE_MOVIES_FETCH_FAILED, err})
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
