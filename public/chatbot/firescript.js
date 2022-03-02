// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDmqqFTQARiYAmLJ7jLGlACCpYzzkQSR5o",
    authDomain: "project-saathi-43be5.firebaseapp.com",
    projectId: "project-saathi-43be5"
  });
var db = firebase.firestore();
function updateFallback(usert,timestamp) {
    db.collection("fallbacks").add({
        userT: usert,
        time: timestamp
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
function updateDesc(userT,now){
    if (digcode16 != '1111198198928298'){
        db.collection("conversation").add({
            userT: userT,
            dgcode16:digcode16,
            time: now
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
}