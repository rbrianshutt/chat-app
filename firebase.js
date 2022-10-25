// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDaDQcJt71eKY-1bPruhL_MSmd8e3xvrFw',
	authDomain: 'chat-app-df46e.firebaseapp.com',
	projectId: 'chat-app-df46e',
	storageBucket: 'chat-app-df46e.appspot.com',
	messagingSenderId: '696971143185',
	appId: '1:696971143185:web:028fbcf89d7401324129b0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
