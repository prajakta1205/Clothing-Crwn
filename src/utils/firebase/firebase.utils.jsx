import {initializeApp} from 'firebase/app'
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
    } from 'firebase/auth'
import { 
  getFirestore, 
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3dIKjXNsJ1TVjyEDEQVw6JS9FtnHru9A",
  authDomain: "e-shop-cloth-db.firebaseapp.com",
  projectId: "e-shop-cloth-db",
  storageBucket: "e-shop-cloth-db.appspot.com",
  messagingSenderId: "688465452941",
  appId: "1:688465452941:web:2d2df8918825353456a7c4",
  measurementId: "G-GDR9H0KB2P"
};
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();

  export const signInWithGooglePopup = () =>signInWithPopup(auth, googleProvider);

  export const signInWithGoogleRedirect = () =>signInWithRedirect(auth, googleProvider);
  
  export const db = getFirestore();

  export const addCollectionAndDocument= async (collectionKey,objectsToAdd,field)=>{
    const collectionRef=collection(db,collectionKey)
    const batch=writeBatch(db)

    objectsToAdd.forEach((object)=>{
      const docRef= doc(collectionRef,object.title.toLowerCase())
      batch.set(docRef,object)
    })
    await batch.commit()
    console.log('done')
  }

  export const getCategoriesAndDocuments = async () => {debugger;
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  };
  
  export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };
  
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  
  export const SignOutUser = async () => await signOut(auth);
  
  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

