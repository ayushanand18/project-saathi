// Initialize Cloud Firestore through Firebase
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {collection, query,orderBy, deleteDoc, doc, getDocs, getFirestore} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import {getAuth, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"
var ngoL = {};
var policL={};
const firebaseApp =initializeApp({
    apiKey: "AIzaSyDmqqFTQARiYAmLJ7jLGlACCpYzzkQSR5o",
    authDomain: "project-saathi-43be5.firebaseapp.com",
    projectId: "project-saathi-43be5"
});
const db = getFirestore();
const refrs = document.querySelector('.refrs');

// declaring divs
var $fallbacksDiv = document.querySelector('.fallbacksDiv');
var $ngoDiv = document.querySelector('.ngoDiv');
var $policeDiv = document.querySelector('.policeDiv');
var $ordealDiv = document.querySelector('.ordealDiv');
var TableP = document.querySelector('.TableP');
var TableN = document.querySelector('.TableN');

// reading data
async function updateFallbacks(){
  // do this
  const querySnapshot = await getDocs(collection(db, "fallbacks"));
  querySnapshot.forEach((doC) => {
    var $newDiv = document.createElement('div');
    $newDiv.setAttribute('class','fallbackChild');
    var $userT =document.createElement('span');
    var $time =document.createElement('span');
    $userT.innerHTML ='<b>User Text</b>: ' + doC.data().userT;
    $time.innerHTML ='<b>Time</b>: ' + new Date(doC.data().time).toString();
    $newDiv.appendChild($userT);
    $newDiv.appendChild($time);
    // delete an element
    var delet = document.createElement('span');
    delet.innerHTML="[ Delete this entry? ]";
    delet.setAttribute('tar',doC.id);
    delet.addEventListener('click', async function(e){
      var docId = e.target.getAttribute('tar');
      await deleteDoc(doc(db,'fallbacks',docId));
      e.target.textContent = "Deleted Entry";
    })
    $newDiv.appendChild(delet);
    $fallbacksDiv.appendChild($newDiv);
  });
}
async function updateNGO(){
  // do this
  const ngoRef = collection(db, "ngo");
  const qngo = query(ngoRef, orderBy("time"));
  const querySnapshot = await getDocs(qngo);

  querySnapshot.forEach((doC) => {
      ngoL[doC.data().dgcode16]=[doC.data().status,doC.data().email];
    var $newDiv = document.createElement('div');
    $newDiv.setAttribute('class','ngoChild');
    var $dgcode16 =document.createElement('span');
    var $email = document.createElement('span');
    var $status =document.createElement('span');
    var $time =document.createElement('span');
    $dgcode16.innerHTML = '<b>16 Digit Code</b>: ' +doC.data().dgcode16;
    $email.innerHTML = '<b>Email</b>: ' + doC.data().email;
    $status.innerHTML = '<b>Status</b>: ' + doC.data().status;
    $time.innerHTML = '<b>Time</b>: ' + new Date(doC.data().time).toString();
    $newDiv.appendChild($dgcode16);
    $newDiv.appendChild($email);
    $newDiv.appendChild($status);
    $newDiv.appendChild($time);
    // delete an element
    var delet = document.createElement('span');
    delet.innerHTML="[ Delete this entry? ]";
    delet.setAttribute('tar',doC.id);
    delet.addEventListener('click', async function(e){
      var docId = e.target.getAttribute('tar');
      await deleteDoc(doc(db,'ngo',docId));
      e.target.textContent = "Deleted Entry";
    })
    $newDiv.appendChild(delet);
    $ngoDiv.appendChild($newDiv);
  });
  for (var i in ngoL){
    var nwRow = document.createElement('tr')
    var nwTd = document.createElement('td');
    var nwTdi = document.createElement('td');
    var nwTdo = document.createElement('td');
    nwTdi.innerHTML = i;
    nwTd.innerHTML = ngoL[i][0];
    nwTdo.innerHTML = ngoL[i][1];
    nwRow.appendChild(nwTdi);
    nwRow.appendChild(nwTd);
    nwRow.appendChild(nwTdo);
    TableN.appendChild(nwRow);
  }
}
async function updatePolice(){
  // do this
  const policeRef = collection(db, "police");
  const qpolice = query(policeRef, orderBy("time"));
  const querySnapshot = await getDocs(qpolice);;
  querySnapshot.forEach((doC) => {
    policL[doC.data().dgcode16] = [doC.data().status,doC.data().email];
    var $newDiv = document.createElement('div');
    $newDiv.setAttribute('class','policeChild');
    var $dgcode16 = document.createElement('span');
    var $email = document.createElement('span');
    var $status = document.createElement('span');
    var $time = document.createElement('span');
    $dgcode16.innerHTML = '<b>16 Digit Code</b>: ' +doC.data().dgcode16;
    $email.innerHTML = '<b>Email</b>: ' +doC.data().email;
    $status.innerHTML = '<b>Status</b>: ' +doC.data().status;
    $time.innerHTML ='<b>Time</b>: ' + new Date(doC.data().time).toString();
    $newDiv.appendChild($dgcode16);
    $newDiv.appendChild($email);
    $newDiv.appendChild($status);
    $newDiv.appendChild($time);
    // delete an element
    var delet = document.createElement('span');
    delet.innerHTML="[ Delete this entry? ]";
    delet.setAttribute('tar',doC.id);
    delet.addEventListener('click', async function(e){
      var docId = e.target.getAttribute('tar');
      await deleteDoc(doc(db,'police',docId));
      e.target.textContent = "Deleted Entry";
    })
    $newDiv.appendChild(delet);
    $policeDiv.appendChild($newDiv)
  });
  for (var i in policL){
    var nwRow = document.createElement('tr');
    var nwTd = document.createElement('td');
    var nwTdi = document.createElement('td');
    var nwTdo = document.createElement('td');
    nwTdi.innerHTML = i;
    nwTd.innerHTML = policL[i][0];
    nwTdo.innerHTML = policL[i][1];
    nwRow.appendChild(nwTdi);
    nwRow.appendChild(nwTd);
    nwRow.appendChild(nwTdo);
    TableP.appendChild(nwRow);
  }
}
async function updateOrdeal(){
  // do this
  const querySnapshot = await getDocs(collection(db, "conversation"));
  querySnapshot.forEach((doC) => {
    var $newDiv = document.createElement('div');
    $newDiv.setAttribute('class','ordealChild');
    var $dgcode16 = document.createElement('span');
    var $userT = document.createElement('span');
    var $time = document.createElement('span');
    $dgcode16.innerHTML ='<b>16 Digit Code</b>: ' + doC.data().dgcode16;
    $userT.innerHTML = '<b>User Text</b>: ' +doC.data().userT;
    $time.innerHTML = '<b>Time</b>: ' + new Date(doC.data().time).toString();
    $newDiv.appendChild($dgcode16);
    $newDiv.appendChild($userT);
    $newDiv.appendChild($time);
    // delete an element
    var delet = document.createElement('span');
    delet.innerHTML="[ Delete this entry? ]";
    delet.setAttribute('tar',doC.id);
    delet.addEventListener('click', async function(e){
      var docId = e.target.getAttribute('tar');
      await deleteDoc(doc(db,'conversation',docId));
      e.target.textContent = "Deleted Entry";
    })
    $newDiv.appendChild(delet);
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
    refrs.style.display='block'
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
    refrs.style.display='none'
    window.location.reload();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });
});
refrs.addEventListener('click', function(){
  $fallbacksDiv.innerHTML ='' 
  $ngoDiv.innerHTML = '' 
  $policeDiv.innerHTML = ''
  $ordealDiv.innerHTML = ''
  TableN.innerHTML ='<tr><th>16 digit code</th><th>Status</th><th>Email</th></tr>'
  TableP.innerHTML='<tr><th>16 digit code</th><th>Status</th><th>Email</th></tr>'
  updateFallbacks();
  updateNGO();
  updatePolice();
  updateOrdeal();
})