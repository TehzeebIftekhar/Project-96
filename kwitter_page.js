var firebaseConfig = {
    apiKey: "AIzaSyCfuvcFbQXdOZRme0tGvjAAiEJHrqMa8h8",
    authDomain: "always-onnews.firebaseapp.com",
    databaseURL: "https://always-onnews-default-rtdb.firebaseio.com",
    projectId: "always-onnews",
    storageBucket: "always-onnews.appspot.com",
    messagingSenderId: "31045062368",
    appId: "1:31045062368:web:7b1798f84fa1553e730a85",
    measurementId: "G-RETQRJ4EBK"
  };

  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        name:user_name,
        meassage:msg,
        like:0
    });

    document.getElementById("msg").value = "";

  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html")
  }

  function getData()
  {
    firebase.database().ref("/"+room_name).on('value', function(snapshot)
    {
      document.getElementById("output").innnerHTML = "";
      snapshot.forEach(function(shildSnapshot) {childSnapshot.key;
        childData = childSnapshot.val();
        if(childKey != "purpose")
        {
          firebase_message_id = childKey;
          message_data = childData;
        
          //Start Code
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
          name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
          like_button ="<button class='btn btn-warning'id="+firebase_message_id+"value= "+like+" onclick='updateLike(this.id)'>"
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
          //End Code
    } }); }); }

    row = name_with_tag + message_with_tag+ like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;

    function updateLike(messag_id)
    {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(Likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes  
      });
    }
  





