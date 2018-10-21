
var txtItemName=document.getElementById("itemName")
var txtPrice= document.getElementById("price");
var txtDate=document.getElementById("date");

function inputInfo() {
  var itemName= txtItemName.value;
  var price= txtPrice.value;
  var date= txtDate.value;

  console.log(itemName);
  console.log(price);
  console.log(date);


  var firebaseRef = firebase.database().ref();
  firebaseRef.child("tonychen@icloudcom").child("Wishlist").child(itemName).child("Price").set(price);
  firebaseRef.child("tonychen@icloudcom").child("Wishlist").child(itemName).child("Date").set(date);

}


function getItems() {
 var firebaseRef = firebase.database().ref().once("value").then(function(snapshot) {console.log(snapshot.val())});
  var price = firebaseRef.child("tonychen@icloudcom").child("Wishlist").child(itemName).child("Price").get(price);
 var date = firebaseRef.child("tonychen@icloudcom").child("Wishlist").child(itemName).child("Date").get(date);
}
