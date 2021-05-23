//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA90WSwrvc0tKfec1y4DS9_4DDtg2mjV3U",
      authDomain: "chat-bot-e2c33.firebaseapp.com",
      databaseURL: "https://chat-bot-e2c33.firebaseio.com",
      projectId: "chat-bot-e2c33",
      storageBucket: "chat-bot-e2c33.appspot.com",
      messagingSenderId: "220431774364",
      appId: "1:220431774364:web:3d8b6ca383e91164ebb359",
      measurementId: "G-XJK9HQ065Q"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      console.log(username);
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("rooom_name");
      window.location="index.html";
    }