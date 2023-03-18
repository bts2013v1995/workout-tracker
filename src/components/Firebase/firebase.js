import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const Config = {
  apiKey: "AIzaSyDmW0Ya6-w-ReU91TPr58I6fBS9i3f6yFA",
  authDomain: "react95-e6001.firebaseapp.com",
  databaseURL: "https://react95-e6001-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react95-e6001",
  storageBucket: "react95-e6001.appspot.com",
  messagingSenderId: "28281724357",
  appId: "1:28281724357:web:cc87f8f4e98fab8e1a3fac",
  measurementId: "G-5PP2TFSJH5"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    
    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
        this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
    
    /*** Database ***/
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    addActivity = (uid, activity) => {
        const ref = this.db.ref().child(`users/${uid}/activities`);
        ref.push(activity);
    };

    updateActivity = (uid, activity, activityKey) => {
        const ref = this.db.ref().child(`users/${uid}/activities/${activityKey}`);
        ref.update(activity);
    }
}

export default Firebase;
