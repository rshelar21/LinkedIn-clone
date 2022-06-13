import { auth, provider, storage} from '../firebase'
import { ref, uploadBytesResumable } from '@firebase/storage';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { getDownloadURL } from '@firebase/storage';
import { doc, onSnapshot } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import db from '../firebase'
import {signInWithPopup, signOut} from 'firebase/auth'
import { SET_USER,SET_LOADING_STATUS, GET_ARTICLES } from './actionType';
import { type } from '@testing-library/user-event/dist/type';
import { async } from '@firebase/util';


export  const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export const setLoading = (status) => ({
    type: SET_LOADING_STATUS,
    status: status,
})

export const getArticles = (payload) => ({
    type: GET_ARTICLES,
    payload: payload,
})

export function signInAPI(){
    return(dispatch) => {
        signInWithPopup(auth,provider).then((payload) =>{
            // console.log(payload)
            dispatch(setUser(payload.user))
        })
        .catch((error) =>{
            console.log(error.message)
        })
    }
}

export function getUserAuth() {
    return(dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUser(user))
            }

        }) 
    }
}

export function signOutAPI() {
    return (dispatch) =>{
        signOut(auth).then(() =>{
            dispatch(setUser(null));
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
}

export function postPhotoAPI(payload) {
    return (dispatch) => {
        dispatch(setLoading(true))
        if (payload.image !== ''){
            const storageRef = ref(storage, `/images/${payload.image.name}`)
            const uploadTask = uploadBytesResumable(storageRef, payload.image)

            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;

                console.log(`progress: ${progress}%`);
                if(snapshot.state === "RUNNING"){
                    console.log(`Progress ${progress}%`);
                }

            },
            (error) => console.log(error.code),
            async() => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                const docRef = await addDoc(collection(db, "articals"), {
                    actor: {
                        description: payload.user.email,
                        title: payload.user.displayName,
                        date: payload.timestamp,
                        images: payload.user.photoURL,

                    },
                    video: payload.video,
                    sharedImg: downloadURL,
                    comments: 0,
                    description: payload.description,

                });
                dispatch(setLoading(false));
                
            }
            )

            
        }
        else if (payload.video ){
            const docRef = addDoc(collection(db, "articals"), {
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    images: payload.user.photoURL,

                },
                video: payload.video,
                sharedImg: "",
                comments: 0,
                description: payload.description,
            });
            dispatch(setLoading(false));
        }
        
    }

}

export  function getArticalsAPI() {
    return async(dispatch) => {
        let payload = [];

        const querySnapshot = await getDocs(collection(db, "articals"), orderBy('actor.date'));

        querySnapshot.forEach((doc) =>{
            // payload = snapshot.docs.map((doc) => doc.data())
            // console.log(doc.data())
            payload = [...payload, doc.data()]
            // payload.push(doc.data)
        //     console.log(payloadary)
        // payload = doc.data()
        // console.log(payload)
            // console.log(doc.id, " => ", doc.data())
        //     console.log(payload)
        //     console.log(payload.actor.date)
        //     console.log(typeof(payload))
            dispatch(getArticles(payload))
        })
        
    }
}