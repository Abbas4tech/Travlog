import { initializeApp } from "firebase/app";
import { getStorage, FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWiiBizRZJ8-OTDYLl9A1hpXBtUh-dodM",
  authDomain: "schbang-landing-page.firebaseapp.com",
  projectId: "schbang-landing-page",
  storageBucket: "schbang-landing-page.appspot.com",
  messagingSenderId: "297121561877",
  appId: "1:297121561877:web:1abf809d900e7941cf7d1c",
  measurementId: "G-79MDRDLH7T",
};

const app = initializeApp(firebaseConfig);

export const storage: FirebaseStorage = getStorage(app);
