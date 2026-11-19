import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "/admin/login";
  }
});