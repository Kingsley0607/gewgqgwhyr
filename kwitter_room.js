var firebaseConfig = {
      apiKey: "AIzaSyC0Dr4vy5PuSv_fTvVt6D1ztl5HU_8vVb4",
      authDomain: "tgedghywhrwhhrhetyewhy.firebaseapp.com",
      databaseURL: "https://tgedghywhrwhhrhetyewhy-default-rtdb.firebaseio.com",
      projectId: "tgedghywhrwhhrhetyewhy",
      storageBucket: "tgedghywhrwhhrhetyewhy.appspot.com",
      messagingSenderId: "860598734208",
      appId: "1:860598734208:web:b5451f0b3d610fecdac565"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       message_data = childData;
      //Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon gylphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").io('value', function(snapshot) {document.getElementById("output").innerHTML})}
Room_name = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick ='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace = "kwitter.html";
}
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button-id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}