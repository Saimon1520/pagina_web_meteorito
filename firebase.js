import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2UeMzxjOvNakv6JY5QF7xKoy7tChdN7o",
  authDomain: "pagina-web-17446.firebaseapp.com",
  projectId: "pagina-web-17446",
  storageBucket: "pagina-web-17446.appspot.com",
  messagingSenderId: "164232976808",
  appId: "1:164232976808:web:7d4b97817f9c3f76cd659d",
  measurementId: "G-HMDRF2RWFN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);