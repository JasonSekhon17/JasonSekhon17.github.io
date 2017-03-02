
(function(){
	
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsbrAiAbEjj-r04y6nN497GswFnj7f5aw",
    authDomain: "pondur-5487b.firebaseapp.com",
    databaseURL: "https://pondur-5487b.firebaseio.com",
    storageBucket: "pondur-5487b.appspot.com",
    messagingSenderId: "375316076570"
  };
  firebase.initializeApp(config);
  
  //get elements
  const txtemail = document.getElementById("txtemail");
  const txtpassword = document.getElementById("txtpassword");
  const btnlogin = document.getElementById("btnlogin");
  const btnsignup = document.getElementById("btnsignup");
  const btnlogout = document.getElementById("btnlogout");
  
  //login event
  btnlogin.addEventListener('click', e => {
	  //get email and pass
	  const email = txtemail.value;
	  const pass = txtpassword.value;
	  const auth = firebase.auth();
	  //sign in
	  const promise = auth.signInWithEmailAndPassword(email, pass);
	  promise.catch(e => console.log(e.message));
  });
  
  //sign in event
  btnsignup.addEventListener('click', e => {
	  const email = txtemail.value;
	  const pass = txtpassword.value;
	  const auth = firebase.auth();
	  //sign up
	  const promise = auth.createUserWithEmailAndPassword(email, pass);
	  promise.catch(e => console.log(e.message));
  });
  
}());