import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACa05xLLs42hdE84-napJzVcPDDKcTv3Q",
    authDomain: "portfolioapi-323005.firebaseapp.com",
    projectId: "portfolioapi-323005",
    storageBucket: "portfolioapi-323005.appspot.com",
    messagingSenderId: "410585581416",
    appId: "1:410585581416:web:aa00bd7081f4545e6738dd",
    measurementId: "G-Y1ZPLXY7XM"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;


