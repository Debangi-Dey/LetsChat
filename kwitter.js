function addUser(){
    console.log("inside");
    username=document.getElementById("user_name").value;
    console.log("inside1");
    localStorage.setItem("username",username);
    console.log("inside2");
    window.location="kwitter_room.html";
    console.log("inside3");
}