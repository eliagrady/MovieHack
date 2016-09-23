import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAIAhQahIzxfnDq1PfzvHNmgB-qPKf5bjQ",
    authDomain: "moviehack-4d204.firebaseapp.com",
    databaseURL: "https://moviehack-4d204.firebaseio.com",
    storageBucket: "moviehack-4d204.appspot.com",
    messagingSenderId: "393063610573",
};

class FirebaseService {
  constructor() {
    this.firebaseApp = null
  }

  connect() {
    this.app = firebase.initializeApp(config);
    this.db =  firebase.database()
  }

  listenToChanges(refPath, listener) {
    this.db.ref(refPath).on('value', (snapshot) => {
      listener(snapshot.val());
    })
  }
}

export const fbService = new FirebaseService();
