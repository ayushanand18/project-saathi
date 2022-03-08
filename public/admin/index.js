// Initialize Cloud Firestore through Firebase
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {collection, getDocs, getFirestore} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import {getAuth, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"

const firebaseApp =initializeApp({
    apiKey: "AIzaSyDmqqFTQARiYAmLJ7jLGlACCpYzzkQSR5o",
    authDomain: "project-saathi-43be5.firebaseapp.com",
    projectId: "project-saathi-43be5"
});
const db = getFirestore();

// declaring divs
var $fallbacksDiv = document.querySelector('.fallbacksDiv');
var $ngoDiv = document.querySelector('.ngoDiv');
var $policeDiv = document.querySelector('.policeDiv');
var $ordealDiv = document.querySelector('.ordealDiv');

// reading data
async function updateFallbacks(){
  // do this
  const querySnapshot = await getDocs(collection(db, "fallbacks"));
  querySnapshot.forEach((doc) => {
    var $newDiv = document.createElement('div');
    $newDiv.setAttribute('class','fallbackChild');
    var $userT =document.createElement('span');
    var $time =document.createElement('span');
    $userT.innerHTML ='<b>User Text</b>: ' + doc.data().userT;
    $time.innerHTML ='<b>Time</b>: ' + new Date(doc.data().time).toString();
    $newDiv.appendChild($userT);
    $newDiv.appendChild($time);
    $fallbacksDiv.appendChild($newDiv);
  });
}
async function updateNGO(){
  // do this
  const querySnapshot = await getDocs(collection(db, "ngo"));
  querySnapshot.forEach((doc) => {
    var $newDiv = document.createElement('div');
    $newDiv.setAttribute('class','ngoChild');
    var $dgcode16 =document.createElement('span');
    var $email = document.createElement('span');
    var $status =document.createElement('span');
    var $time =document.createElement('span');
    $dgcode16.innerHTML = '<b>16 Digit Code</b>: ' +doc.data().dgcode16;
    $email.innerHTML = '<b>Email</b>: ' + doc.data().email;
    $status.innerHTML = '<b>Status</b>: ' + doc.data().status;
    $time.innerHTML = '<b>Time</b>: ' + new Date(doc.data().time).toString();
    $newDiv.appendChild($dgcode16);
    $newDiv.appendChild($email);
    $newDiv.appendChild($status);
    $newDiv.appendChild($time);
    $ngoDiv.appendChild($newDiv);
  });
}
async function updatePolice(){
  // do this
  const querySnapshot = await getDocs(collection(db, "police"));
  querySnapshot.forEach((doc) => {
    var $newDiv = document.createElement('div');
    $newDiv.setAttribute('class','policeChild');
    var $dgcode16 = document.createElement('span');
    var $email = document.createElement('span');
    var $status = document.createElement('span');
    var $time = document.createElement('span');
    $dgcode16.innerHTML = '<b>16 Digit Code</b>: ' +doc.data().dgcode16;
    $email.innerHTML = '<b>Email</b>: ' +doc.data().email;
    $status.innerHTML = '<b>Status</b>: ' +doc.data().status;
    $time.innerHTML ='<b>Time</b>: ' + new Date(doc.data().time).toString();
    $newDiv.appendChild($dgcode16);
    $newDiv.appendChild($email);
    $newDiv.appendChild($status);
    $newDiv.appendChild($time);
    $policeDiv.appendChild($newDiv)
  });
}
async function updateOrdeal(){
  // do this
  const querySnapshot = await getDocs(collection(db, "conversation"));
  querySnapshot.forEach((doc) => {
    var $newDiv = document.createElement('div');
    $newDiv.setAttribute('class','ordealChild');
    var $dgcode16 = document.createElement('span');
    var $userT = document.createElement('span');
    var $time = document.createElement('span');
    $dgcode16.innerHTML ='<b>16 Digit Code</b>: ' + doc.data().dgcode16;
    $userT.innerHTML = '<b>User Text</b>: ' +doc.data().userT;
    $time.innerHTML = '<b>Time</b>: ' + new Date(doc.data().time).toString();
    $newDiv.appendChild($dgcode16);
    $newDiv.appendChild($userT);
    $newDiv.appendChild($time);
    $ordealDiv.appendChild($newDiv);
  });
}

// Login Function
const auth = getAuth();
var $buttonLogin = document.querySelector('.buttonLogin');
$buttonLogin.addEventListener('click',function loginFunc(){
  var $usremail = document.querySelector('.email').value;
  var $usrpwd = document.querySelector('.password').value;
  signInWithEmailAndPassword(auth, $usremail, $usrpwd)
  .then((userCredential) => {
    const user = userCredential.user;
    updateFallbacks();
    updateNGO();
    updatePolice();
    updateOrdeal();
    $buttonLogin.style.display='none'
    $buttonLogout.style.display='block'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });
});
var $buttonLogout = document.querySelector('.buttonLogout');
$buttonLogout.addEventListener('click',function loginFunc(){
  signOut(auth).then(() => {
    alert('Signout success!');
    $buttonLogin.style.display='block'
    $buttonLogout.style.display='none'
    window.location.reload();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });
});