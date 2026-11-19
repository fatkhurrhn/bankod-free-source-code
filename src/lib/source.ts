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
  increment,
} from "firebase/firestore";
import { db } from "./firebase";

const col = collection(db, "sources");

export type SourceItem = {
  id?: string;
  nama: string;
  thumbnail: string;
  stack: string[];
  kategori: string;
  download: string;
  downloadCount: number;
};

export async function getSources(): Promise<SourceItem[]> {
  const q = query(col, orderBy("nama"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data() as Omit<SourceItem, "id">;
    return {
      id: d.id,
      ...data,
      kategori: data.kategori ?? "",
      downloadCount: data.downloadCount ?? 0,
    };
  });
}

export async function getSource(id: string): Promise<SourceItem | null> {
  const snap = await getDoc(doc(db, "sources", id));
  if (!snap.exists()) return null;
  const data = snap.data() as Omit<SourceItem, "id">;
  return {
    id: snap.id,
    ...data,
    kategori: data.kategori ?? "",
    downloadCount: data.downloadCount ?? 0,
  };
}

export async function addSource(data: Omit<SourceItem, "id" | "downloadCount">) {
  await addDoc(col, { ...data, downloadCount: 0 });
}

export async function updateSource(id: string, data: Partial<SourceItem>) {
  await updateDoc(doc(db, "sources", id), data);
}

export async function deleteSource(id: string) {
  await deleteDoc(doc(db, "sources", id));
}

export async function incrementDownload(id: string) {
  await updateDoc(doc(db, "sources", id), { downloadCount: increment(1) });
}

// Helper: parse string "next-js tailwind css" → ["next-js", "tailwind", "css"]
export function parseStack(input: string): string[] {
  return input
    .trim()
    .split(/\s+/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}