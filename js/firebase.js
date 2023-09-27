import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc, } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUxlMg1IhCASVgQdb6FplLAYJH2N4zNec",
  authDomain: "wedding-54d18.firebaseapp.com",
  projectId: "wedding-54d18",
  storageBucket: "wedding-54d18.appspot.com",
  messagingSenderId: "815447542558",
  appId: "1:815447542558:web:4725f2866b3aaff21f170f",
  measurementId: "G-4VPW2FVEKQ"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const saveUser = (name, description) => addDoc(collection(db, "users"), { name, description });

export const onGetUsers = (callback) => onSnapshot(collection(db, "users"), callback);

export const deleteUser = (id) => deleteDoc(doc(db, "users", id));

export const getUser = (id) => getDoc(doc(db, "users", id));

export const updateUser = (id, newFields) => updateDoc(doc(db, "users", id), newFields);

export const getUsers = () => getDocs(collection(db, "users"));
