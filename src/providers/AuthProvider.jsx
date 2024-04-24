import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    // creating User

    const createUser = (email, password) => {
         setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password

    const signIn = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {createUser, users, setUsers, loading, setLoading , signIn}

    return (
        <AuthContext.Provider value={userInfo} >

            {children}
            
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
}

export default AuthProvider;