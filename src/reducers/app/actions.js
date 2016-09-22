import * as types from './actionTypes';
import uuid from 'uuid';

import {AsyncStorage} from 'react-native';
export function appInitializedAction() {

  return async function(dispatch, getState) {
    const userId = await AsyncStorage.getItem('userId');
    if (userId) {
      dispatch({type: types.APP_INITIALIZED, userId: userId, isUserNew: false});
      getStore().isUserNew = false;
    }
    else {
      const newUuid = uuid.v4();
      await AsyncStorage.setItem('userId', newUuid);
      dispatch({type: types.APP_INITIALIZED, userId: newUuid, isUserNew: true});
    }
  };
}
