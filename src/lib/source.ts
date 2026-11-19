import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

const col = collection(db, "sources");

export type SourceItem = {
  id?: string;
  nama: string;
  thumbnail: string;
  stack: string[];
  download: string;
};

export async function getSources(): Promise<SourceItem[]> {
  const q = query(col, orderBy("nama"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<SourceItem, "id">) }));
}

export async function getSource(id: string): Promise<SourceItem | null> {
  const snap = await getDoc(doc(db, "sources", id));
  return snap.exists() ? ({ id: snap.id, ...(snap.data() as Omit<SourceItem, "id">) }) : null;
}

export async function addSource(data: SourceItem) {
  await addDoc(col, data);
}

export async function updateSource(id: string, data: Partial<SourceItem>) {
  await updateDoc(doc(db, "sources", id), data);
}

export async function deleteSource(id: string) {
  await deleteDoc(doc(db, "sources", id));
}