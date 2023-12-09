import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import {    query, where, getDocs } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBKPETabTmP0DlNrwbkHcwRFlhyhkavffg",
    authDomain: "w3hack-56504.firebaseapp.com",
    projectId: "w3hack-56504",
    storageBucket: "w3hack-56504.appspot.com",
    messagingSenderId: "573406748653",
    appId: "1:573406748653:web:628195ad2c3eceabafd1e4",
    measurementId: "G-QKP4CLLK66"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const addAadharNumber = async (phoneNo,anonProof) => {
   
    try {
      await addDoc(collection(db, 'users'), {
        phone:phoneNo,
        anonProof:anonProof,
        created: Timestamp.now()
      })
      
      console.log("aadhar added")
    } catch (err) {
      alert(err)
    }
  }

  const phoneNumberExists = async (phoneNo) => {
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('phone', '==', phoneNo));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };
  const anonProofExists = async (anonProof)=>{
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('phone', '==', anonProof));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }
  

  

  export {db,addAadharNumber,phoneNumberExists,anonProofExists}