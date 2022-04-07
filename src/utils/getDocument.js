import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

async function getDocument(myCollection, myDoc) {
  const docSnap = await getDoc(doc(db, myCollection, myDoc));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

export { getDocument };
