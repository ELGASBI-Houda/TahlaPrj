const firebaseConfig = {
  apiKey: "AIzaSyAmKEEt00YHxZ7evbLMtuJhCYX1zTrLRhw",
  authDomain: "tatatourist-96042.firebaseapp.com",
  databaseURL: "https://tatatourist-96042-default-rtdb.firebaseio.com",
  projectId: "tatatourist-96042",
  storageBucket: "tatatourist-96042.appspot.com",
  messagingSenderId: "936611492660",
  appId: "1:936611492660:web:39d83c92778c51d666ab61"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var date = getElementVal("date");
  var checkfemale  = getElementVal("check-female");
  var checkmale = getElementVal("check-male");
  /*var address = getElementVal("address");
  var service = getElementVal("service");
  var description = getElementVal("description");
  var images = getElementVal("images");*/

  saveMessages(name, email, phone, date, checkmale, checkfemale);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, phone, date, checkmale, checkfemale) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    phone: phone,
    date: date,
    checkmale: check-male,
    checkfemale: check-female,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};