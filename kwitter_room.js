const firebaseConfig = {
    apiKey: "AIzaSyBWoq_6T1VeZiLpBbHSue0j9Y4CTrHNhwk",
    authDomain: "let-s-chat-web-app-5f477.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-5f477-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-5f477",
    storageBucket: "let-s-chat-web-app-5f477.appspot.com",
    messagingSenderId: "429130108079",
    appId: "1:429130108079:web:7562b5bcbe79c30a0a185a",
    measurementId: "G-X4F2EVH3EE"
  };
  
  firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
        room_name = document.getElementById("room_name").value

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div<hr>";
      document.getElementById("output").innerHTML += row;

    //End code
    });
});}
getData();