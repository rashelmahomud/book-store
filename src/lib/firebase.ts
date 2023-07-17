/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,

  apiKey: "AIzaSyA71aneVe6nyD5xAy0h9Q9vMKMVu_o1eTI",
  authDomain: "bookstore-4ea51.firebaseapp.com",
  projectId: "bookstore-4ea51",
  storageBucket: "bookstore-4ea51.appspot.com",
  messagingSenderId: "446278338203",
  appId: "1:446278338203:web:5a1979d0dac74f6cb8283e",
};

const app = initializeApp(firebaseConfig);

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const auth = getAuth(app);
