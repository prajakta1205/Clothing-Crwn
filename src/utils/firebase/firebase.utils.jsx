import {initializeApp} from 'firebase/app'
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore, doc,getDoc,setDoc} from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3dIKjXNsJ1TVjyEDEQVw6JS9FtnHru9A",
    authDomain: "e-shop-cloth-db.firebaseapp.com",
    projectId: "e-shop-cloth-db",
    storageBucket: "e-shop-cloth-db.appspot.com",
    messagingSenderId: "688465452941",
    appId: "1:688465452941:web:2d2df8918825353456a7c4"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)

  export const db=getFirestore()

  export const createUserDocumentFromAuth= async(userAuth) =>{
    const userDocRef=doc(db,'users',userAuth.uid)
    console.log(userDocRef)

    const userSnapshot=await getDoc(userDocRef)
    console.log(userSnapshot)

  }