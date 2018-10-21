
var txtIncome=document.getElementById("monthlyIncome")
var txtAuto= document.getElementById("autoInsurance");
var txtHome=document.getElementById("homeInsurance");
var txtMortgage=document.getElementById("mortgage");
var txtCar=document.getElementById("car");
var txtPhone =document.getElementById("phone");
var txtUtility=document.getElementById("utility");
var txtMedicalInsurance=document.getElementById("medicalInsurance");
var txtOther=document.getElementById("other");

function inputInfo() {
  var income= txtIncome.value;
  var auto= txtAuto.value;
  var home= txtHome.value;
  var mortgage= txtMortgage.value;
  var car= txtCar.value;
  var phone = txtPhone.value;
  var utility= txtUtility.value;
  var medical=txtMedicalInsurance.value;
  var other=txtOther.value;
  console.log(income);
  console.log(auto);
  console.log(home);
  console.log(mortgage);
  console.log(car);
  console.log(phone);
  console.log(utility);

  var firebaseRef = firebase.database().ref();
  firebaseRef.child("tonychen@icloudcom").child("Income").set(income);
  firebaseRef.child("tonychen@icloudcom").child("Auto Insurance").set(auto);
  firebaseRef.child("tonychen@icloudcom").child("Home Insurance").set(home);
  firebaseRef.child("tonychen@icloudcom").child("Mortgage").set(mortgage);
  firebaseRef.child("tonychen@icloudcom").child("Car Payment").set(car);
  firebaseRef.child("tonychen@icloudcom").child("Phone Bill").set(phone);
  firebaseRef.child("tonychen@icloudcom").child("Utility Bill").set(utility);
  firebaseRef.child("tonychen@icloudcom").child("Medical Insurance").set(medical);
  firebaseRef.child("tonychen@icloudcom").child("Other").set(other);

}
