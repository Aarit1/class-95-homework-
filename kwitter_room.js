 var firebaseConfig = {
    apiKey: "AIzaSyDOj-2rPST0ZnxUBD4JuSPNcTL3mH8DXo8",
    authDomain: "lets-chat-1fdb1.firebaseapp.com",
    databaseURL: "https://lets-chat-1fdb1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-1fdb1",
    storageBucket: "lets-chat-1fdb1.appspot.com",
    messagingSenderId: "534257675144",
    appId: "1:534257675144:web:b8df191a5cf390a45ca83d"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome "+user_name+" !";

  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id) '>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}


