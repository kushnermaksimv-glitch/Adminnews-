// Вставь сюда свои данные из Firebase:
// Project settings → General → Your apps → Web app → firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyAVKklUhMl2QfEp0JKhD_h8DWY1vXdS-QA",
  authDomain: "adminnews-3ee0d.firebaseapp.com",
  databaseURL: "https://adminnews-3ee0d-default-rtdb.firebaseio.com",
  projectId: "adminnews-3ee0d",
  storageBucket: "adminnews-3ee0d.firebasestorage.app",
  messagingSenderId: "1090950989717",
  appId: "1:1090950989717:web:ca71a7e3b591720fc7589c",
  measurementId: "G-C0XCLV9GJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};
firebase.initializeApp(firebaseConfig);
