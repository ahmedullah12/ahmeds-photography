import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);  
        });
        return () => {
            unsubscribe();
        };
    },[])


    const authInfo ={
        user,
        setUser,
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;