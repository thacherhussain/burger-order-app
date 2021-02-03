import firebase from 'firebase/app'
import 'firebase/auth'

const allInitalized = [
  'REACT_APP_API_KEY',
  'REACT_APP_AUTH_DOMAIN',
  'REACT_APP_DATABASE_URL',
  'REACT_APP_PROJECT_ID',
  'REACT_APP_STORAGE_BUCKET',
  'REACT_APP_MESSAGING_SENDER_ID',
  'REACT_APP_APP_ID',
].filter((key) => !process.env[key])

if (allInitalized.length > 0)
  throw new Error(
    `The following environment variables are missing for firebase: ${allInitalized.join(
      ', '
    )}`
  )

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
