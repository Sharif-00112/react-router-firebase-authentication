import { useState } from "react";
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication(); 

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            setUser(result.user);
        }).catch((error) => {
            // Handle Errors here.
            setError(error.code);
            setError(error.message);
            // The email of the user's account used.
            setError(error.customData.email);
            // The AuthCredential type that was used.
            setError(GoogleAuthProvider.credentialFromError(error));
        });
    }

    const signInUsingGithub = () =>{
      console.log('github login coming soon...');
      
      signInWithPopup(auth, gitProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        setUser(result.user);
      }).catch((error) => {
        // Handle Errors here.
        setError(error.code);
        setError(error.message);
        // The email of the user's account used.
        setError(error.customData.email);
        // The AuthCredential type that was used.
        setError(GithubAuthProvider.credentialFromError(error));
      });
    };

    const signInUsingFacebook = () =>{
      console.log('Facebook login coming soon...');

      signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        setUser(result.user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        // Handle Errors here.
        setError(error.code);
        setError(error.message);
        // The email of the user's account used.
        setError(error.customData.email);
        // The AuthCredential type that was used.
        setError(FacebookAuthProvider.credentialFromError(error));
      });
    };

    const signInUsingTwitter = () =>{
      console.log('Twitter login coming soon...');
      alert('Twitter Login will be added later...');
    };

    const customLogin = (email, password) =>{
      console.log('custom login coming soon...');

    };

    const customRegister = (email, password) =>{
      console.log('custom register coming soon...');

    };

    const handleLoginSubmitBtn = e =>{
      console.log('custom register coming soon...');

    }

    const handleRegisterSubmitBtn = e =>{
      console.log('custom register coming soon...');

    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              // console.log('inside state change', user);
              setUser(user);
            } else {
              // User is signed out
              // ...
            }
          });
    },[auth]);

    const logout = () =>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            setUser({});
          }).catch((error) => {
            // An error happened.
          });
    }

    return {
      signInUsingGoogle, 
      signInUsingGithub, 
      signInUsingFacebook,
      signInUsingTwitter, 
      customLogin, 
      customRegister,
      handleLoginSubmitBtn,
      handleRegisterSubmitBtn,
      user, 
      error, 
      logout
    };
}

export default useFirebase;