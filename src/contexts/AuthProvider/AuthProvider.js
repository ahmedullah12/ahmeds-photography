import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    };

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    };

    const saveUser = (name, email) => {
        const user = {
          name,
          email,
          isAdmin: false,
        }
  
        axios.post('https://assignment-11-server-side-wine.vercel.app/users', user)
        .then(res => console.log(res))
        .catch(err => console.log(err)); 
      }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser); 
            setLoading(false) 
        });
        return () => {
            unsubscribe();
        };
    },[])


    const authInfo ={
        user,
        setUser,
        loading,
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        logOut,
        updateUserProfile,
        saveUser
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