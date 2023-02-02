import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const setDataUser = async (
  uid,
  data = { learning: [], dominated: [], created: [] }
) => {
  await setDoc(doc(db, "users", uid), data);
};
