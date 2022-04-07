import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

async function getFirestore(myCollection) {
  const dataCol = collection(db, myCollection);
  const dataSnapshot = await getDocs(dataCol);
  const dataList = dataSnapshot.docs.map((doc) => doc.data());
  return dataList;
}

export { getFirestore };
