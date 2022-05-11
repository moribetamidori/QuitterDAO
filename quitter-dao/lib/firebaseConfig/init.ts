// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, query, where, limit} from 'firebase/firestore';
import { doc, getDoc, collection, addDoc, setDoc, getDocs} from 'firebase/firestore';
import * as firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/storage';
import "firebase/firestore"
import { Timestamp } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// function initFirebase(){
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId
};

// Initialize Firebase
const apps = getApps()
if(!apps.length){
  initializeApp(firebaseConfig);
}

//get db (firestore) from firebase 
export const firestore = getFirestore()

export async function getUserWithUsername(username:string) {
  const usersRef = collection(firestore, 'users');
  // console.log(username)
  //get all users documents in user database 
  const q = query(usersRef, where('username', '==', username), limit(1));
  //within those documents, get the one with username equals to the username being passed 
  const userDoc = (await getDocs(q)).docs[0];
  return userDoc;
}

export function postToJSON(doc:any) {
  // console.log("init.ts")
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  }

}


export function communityToJSON(doc:any) {
  // console.log("init.ts")
  const data = doc.data();
  return {
    ...data,
  }

}

export const fromMillis = Timestamp.fromMillis;

const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp);
// const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

// }


// initFirebase()


