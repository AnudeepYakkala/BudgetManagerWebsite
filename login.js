
var txtEmail= document.getElementById("txtEmail");
var txtPassword=document.getElementById("txtPassword");

function CheckUserAndPassword() {
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();
  console.log(email);
  console.log(pass);
  firebase.auth().signInWithEmailAndPassword(email, pass).then(function(){
    window.location.replace('./addInfo.html');
  } ).catch(function(error){
    
  })


//   var firebaseRef = firebase.database().ref();

//   firebaseRef.child("Text").set("hi");
}
