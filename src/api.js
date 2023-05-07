import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyDrWbQ_yzP1GS_ylLpFe_BKqRshk1u6g_Y",
  authDomain: "vanshare-ac8f3.firebaseapp.com",
  projectId: "vanshare-ac8f3",
  storageBucket: "vanshare-ac8f3.appspot.com",
  messagingSenderId: "857124470906",
  appId: "1:857124470906:web:a6ad2d7b6bc415dffb7bc3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")


export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr)
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}