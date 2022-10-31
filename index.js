// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOHVKru6Ag9K40KtnzIrvE_73VOJfU9EA",
  authDomain: "kc326-d50d2.firebaseapp.com",
  databaseURL: "https://kc326-d50d2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kc326-d50d2",
  storageBucket: "kc326-d50d2.appspot.com",
  messagingSenderId: "1024155987362",
  appId: "1:1024155987362:web:8acad2b81305f65ce0d6fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('Texter').innerHTML = snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}

// setInterval(function(){Getval()},1000);