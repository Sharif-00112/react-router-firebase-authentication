import { useState } from "react";
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            setUser(result.user);
            console.log(result.user);
        }).catch((error) => {
            // Handle Errors here.
            setError(error.code);
            setError(error.message);
            // The email of the user's account used.
            setError(error.customData.email);
            // The AuthCredential type that was used.
            setError(GoogleAuthProvider.credentialFromError(error));
            console.log(error);
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              console.log('inside state change', user);
              setUser(user);
            } else {
              // User is signed out
              // ...
            }
          });
    },[auth])

    const logout = () =>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            setUser({});
          }).catch((error) => {
            // An error happened.
          });
    }

    return {signInUsingGoogle, user, error, logout};
}

export default useFirebase;