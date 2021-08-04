// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCtkLMOQutHSMxBqNWuhuHQS3cXDtEkG0g",
    authDomain: "log-in-site-9a8d8.firebaseapp.com",
    databaseURL: "https://log-in-site-9a8d8-default-rtdb.firebaseio.com",
    projectId: "log-in-site-9a8d8",
    storageBucket: "log-in-site-9a8d8.appspot.com",
    messagingSenderId: "268358857515",
    appId: "1:268358857515:web:152370d9e5aaf88032cb6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  var auth = firebase.auth();
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");
function signin(){
 
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    page1.style.display = "none";
    page3.style.display = "block";

    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}
function logout(){
 auth.signOut();
 page1.style.display = "block";
 page3.style.display = "none";
}
function register(){
  var emaill = document.getElementById("email2");
  var pword = document.getElementById("password2");

  page2.style.display = "block";
  page1.style.display = "none";
  auth.createUserWithEmailAndPassword(emaill.value, pword.value)
  .then((userCredential) => {
    page2.style.display = "none";
    page3.style.display = "block";
    var user = userCredential.user;
    
  })
  .catch((error) => {
    var error = error.message;
    alert(erroreessage)
  });
}
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    page3.style.display = "block";
    page1.style.display = "none";
    page2.style.display = "none";
    // ...
  } else {
    page1.style.display = "block";
  }
});



var db = firebase.database();
function send(){
  var msgcount = 0;
  var message = document.getElementById("inp").value;
  const ref = db.ref('message');
  var msg = {
    message: message
  }
  ref.push(msg)
  document.getElementById("inp").value = "";
  ref.once('child_added',function (snapshot){
    var data = snapshot.val();
    const cls = "newmessage"
    var newMessage = "<p class="+ cls +">"+ data.message +"</p>";
    document.getElementById("messages").innerHTML +=  newMessage;
  })
}
