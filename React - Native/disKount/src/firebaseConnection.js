import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase - Obter do console do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmvpAVJmYpweDIIV6qVXwhxZ9B9QgM3tw",
  authDomain: "diskount-6d716.firebaseapp.com",
  projectId: "diskount-6d716",
  storageBucket: "diskount-6d716.appspot.com",
  messagingSenderId: "940628962389",
  appId: "1:940628962389:web:3eca57ef97c3d30ff1b8dc",
  measurementId: "G-GVETTLT77G" 
};


// // Inicializar o Firebase
// if (!firebase.apps.length){
//   const app = initializeApp(firebaseConfig);
//   const db = getDatabase(app);
//   const firestoreDb = getFirestore(app);
// }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };