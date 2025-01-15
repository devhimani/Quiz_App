import { initializeApp } from "firebase/app";
import { get, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBXh-VEcme6WURiwcaPvFfT1BE_NXS3GHI",
  authDomain: "quizappdb-4f1c9.firebaseapp.com",
  projectId: "quizappdb-4f1c9",
  storageBucket: "quizappdb-4f1c9.firebasestorage.app",
  messagingSenderId: "357671496130",
  appId: "1:357671496130:web:ce94fa28b5227b9d2c8e5b",
  databaseURL: "https://quizappdb-4f1c9-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export const addQuizDB = (quiz) => {
  //   console.log(quiz);
  set(ref(db, "quizzes/" + quiz.id), quiz);
};

export const getDataDB = () => {
  return get(ref(db, "quizzes"));
};
