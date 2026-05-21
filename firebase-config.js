// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyAX3oKHGLURHJdgK5LDyl6y-2oJqTNn5U8",
  authDomain: "test-3aa91.firebaseapp.com",
  projectId: "test-3aa91",
  storageBucket: "test-3aa91.firebasestorage.app",
  messagingSenderId: "308762818540",
  appId: "1:308762818540:web:702422c3546daf54c7b2c9",
  measurementId: "G-JWYC5S29Q4"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firebase 서비스 초기화
const auth = firebase.auth();
const db = firebase.firestore();

console.log('✅ Firebase initialized successfully');
