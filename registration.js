console.log('HEY!');


var txtName=document.getElementById("txtNameToRegister")
var txtEmail= document.getElementById("txtEmailToRegister");
var txtPassword=document.getElementById("txtPasswordToRegister");

function addUserAndPassword() {
  var name = txtName.value;
  var email = txtEmail.value;
  var formattedEmail= email.split('').filter(char => ![".", "#"].includes(char)).join('')

  // var firebaseRef = firebase.database().ref();
  // firebaseRef.set(formattedEmail);

  var pass = txtPassword.value;
  var auth = firebase.auth();
  console.log(email);
  console.log(pass);
  console.log(name);
  firebase.auth().createUserWithEmailAndPassword(email, pass);
  window.location.replace('./addInfo.html');
}
