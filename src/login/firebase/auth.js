import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { FbAuth } from "../../firebase/config"

const googleProvider = new GoogleAuthProvider();

export const createNewUser = async(email, password, displayName) => {

    try {
        const response = await createUserWithEmailAndPassword(FbAuth, email, password)
        await updateProfile(FbAuth.currentUser, {
            displayName,
        })
        return response 
    } catch (error) {
        console.error(error)
        return error.code
    }

}

export const signInWithGoogle = async() => {
    
    try {
        const response = await signInWithPopup(FbAuth, googleProvider)
        return response
    } catch (error) {
        console.error(error)
        return error.code
    }

}

export const signInWithEmail = async(email, password) => {
    
    try {
        const response = await signInWithEmailAndPassword(FbAuth, email, password)
        return response
    } catch (error) {
        console.error(error)
        return error.code
    }
}

export const getCurrentUserData = () => {
    let currentUser
    onAuthStateChanged(FbAuth, (user)=> {
        if(user){
            currentUser = user
        }else{
            currentUser = null
        }
    })
    if(currentUser){
        const {email, displayName, photoURL, uid} = currentUser
        return {email, displayName, photoURL, uid}
    }else{
        return null
    }
}

export const signUserOut = async() => {
    try {
        const response = await signOut(FbAuth)
    } catch (error) {
        console.error(error)
    }
} 