import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDF9baJ3Jao2d42R70rKIORKhxkkCGO710",
    authDomain: "animals-d9d88.firebaseapp.com",
    projectId: "animals-d9d88",
    storageBucket: "animals-d9d88.appspot.com",
    messagingSenderId: "304719243457",
    appId: "1:304719243457:web:3e6cbe0aa6cbca92010c40",
    measurementId: "G-ZQZMS1FXPX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
