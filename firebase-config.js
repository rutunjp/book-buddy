import { initializeApp } from 'firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBwoDD-ZZG6EZVk3QVTtRh4ewMvYIGBLdg',
  authDomain: 'bookrack-40f2a.firebaseapp.com',
  projectId: 'bookrack-40f2a',
  storageBucket: 'bookrack-40f2a.appspot.com',
  messagingSenderId: '775762010157',
  appId: '1:775762010157:web:a184c6ccea2c6e649058a4',
  measurementId: 'G-8LQYV0BJR7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
// export const handleSignInWithGoogle = async () => {
//   await signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result)
//       const token = credential.accessToken
//       const user = result.user
//       console.log(user.displayName, user.email)
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code
//       const errorMessage = error.message
//       // The email of the user's account used.
//       const email = error.customData.email
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error)
//       // ...
//     })
// }
