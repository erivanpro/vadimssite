import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD07lSCetMVKtWIYsJssaaNgMp_uHzfL_8",
  authDomain: "elunico-5139b.firebaseapp.com",
  projectId: "elunico-5139b",
  storageBucket: "elunico-5139b.firebasestorage.app",
  messagingSenderId: "299414488943",
  appId: "1:299414488943:web:fa1b525adc26dc19390a9a",
  measurementId: "G-SSRNE7VC53",
};

// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getFirebaseAnalytics() {
  if (typeof window === "undefined") {
    return null;
  }

  const { getAnalytics, isSupported } = await import("firebase/analytics");

  return (await isSupported()) ? getAnalytics(app) : null;
}
