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
  //var gender = getElementVal("gender");
  var address = getElementVal("address");
  var service = getElementVal("service");
  var description = getElementVal("description");
  //var images = getElementVal("images");

  saveMessages(name, email, phone, date, address, service, description);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, phone, date, address, service, description) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    phone: phone,
    date: date,
    address: address,
    service: service,
    description: description,
  });
};

//function to upload image file to firebase storage
/*function uploadImage() { 
  var file = document.getElementById("images").files[0];
  var storageRef = firebase.storage().ref("images/" + file.name);
  var uploadTask = storageRef.put(file);
  uploadTask.on('state_changed', function(snapshot) {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("upload is " + progress + "% done");
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    // Handle unsuccessful uploads
  }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
    });
  });
}*/


const getElementVal = (id) => {
  return document.getElementById(id).value;
};