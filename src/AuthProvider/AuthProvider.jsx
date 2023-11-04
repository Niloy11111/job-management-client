import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {


    const googleprovider = new GoogleAuthProvider();

    const [user , setUser ] = useState(null) ;
    const [loading, setLoading] = useState(true) ;

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider)
    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name , photoURL: photo
          })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
              setUser(currentUser) ;
              setLoading(false) ;
        }) ;

        return () => {
            unSubscribe() ;
        }
    }, [])

    const AuthInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut ,
        googleSignIn,
        handleUpdateProfile
    }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;  