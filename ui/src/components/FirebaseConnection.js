import * as firebase from 'firebase/app';
import 'firebase/auth';

class FirebaseConnection {

    constructor() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAWuSZ3MPsqzT3XM0hk22gcYcDdrZb1xO4",
            authDomain: "my-first-test-project-a30e3.firebaseapp.com",
            databaseURL: "https://my-first-test-project-a30e3.firebaseio.com",
            projectId: "my-first-test-project-a30e3",
            storageBucket: "my-first-test-project-a30e3.appspot.com",
            messagingSenderId: "831372768098"
        };
        firebase.initializeApp(config);
        this.provider = new firebase.auth.FacebookAuthProvider();
        this.provider.addScope('public_profile');
        //firebase.auth().signInWithRedirect(provider);
    }

    facebookSignIn() {
        // firebase.auth().signInWithRedirect(this.provider);
        return firebase.auth().signInWithPopup(this.provider)
        //return firebase.auth().getRedirectResult();
    }

}

const firebaseConnection = new FirebaseConnection();

export {firebaseConnection};
