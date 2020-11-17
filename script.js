var log_email = document.getElementById('log_email');
var log_password = document.getElementById('log_password');

var registerDiv = document.getElementById('register');
var loginDiv = document.getElementById('login');

var reg_name = document.getElementById('reg_name');
var reg_email = document.getElementById('reg_email');
var reg_password = document.getElementById('reg_password');
var reg_passwordConfirm = document.getElementById('reg_passwordConfirm');


// LOGIN Validation

function logEmailFunc() {
  let x = document.getElementById('log_email').value;
  if (x === "") {
    alert('Please Enter Your Email')
  }
  if (x === localStorage.getItem('email')) {
    document.getElementById('log_email').style.border = 'none';
    document.getElementById('log_email').style.color = 'green';
  } else {
    alert('Account not found. Please Register!');
  }
}


function logPasswordFunc() {
  let x = document.getElementById('log_password').value;
  if (x === "") {
    alert('Please Enter Your Password')
  }
  if (x === localStorage.getItem('password')) {
    document.getElementById('log_password').style.border = 'none';
    document.getElementById('log_password').style.color = 'green';
  } else {
    alert('Wrong Password');
  }
}
// LOGIN SUBMIT AND DISSAPEAR
function loginSubmit() {
  if (document.getElementById('log_email').style.color == "green" &&
  document.getElementById('log_password').style.color == 'green') {
    document.getElementById('ls').style.display = 'none';
    document.getElementById('iText').style.display = 'inline';
    document.getElementById('welcomeText').innerHTML = "Welcome " + document.getElementById('reg_name').value.toUpperCase();
    document.getElementById('underText').innerHTML = "Hey, " + document.getElementById('reg_name').value.toLowerCase() + ". Enjoy your stay :) and check out our menu below:";
    document.getElementById('loginExplode').style.display = "none";
    document.getElementById('hotLink').href = "file:///C:/Coffee-shop/menu.html";
    document.getElementById('coldLink').href = "file:///C:/Coffee-shop/menu.html";
    document.getElementById('dessertLink').href = "file:///C:/Coffee-shop/menu.html";
    document.getElementById('specialLink').href = "file:///C:/Coffee-shop/menu.html";
    document.getElementById('homeLink').href = "file:///C:/Coffee-shop/index.html#";

  }
}



// REGISTER DISPLAY button
function register() {
  registerDiv.style.display = 'inline' ;
  loginDiv.style.display = 'none';
}

// LOGIN DISPLAY button
function login() {
  registerDiv.style.display = 'none' ;
  loginDiv.style.display = 'inline';
}

// REGISTER Validation

function regNameFunc() {
  let x = document.getElementById('reg_name').value;
  localStorage.name = x;
  if (x === "") {
    alert('Please Enter Your Name')
  }
  if (document.getElementById('reg_name').innerHTML = /\s/.test(x)) {
    document.getElementById('reg_name').style.color = 'green';
  } else {
    document.getElementById('reg_name').style.color = 'red';
    alert('Please Enter A Real NAME and Surname');
  }
}

function regEmailFunc() {
  let x = document.getElementById('reg_email').value;
  localStorage.email = x;
  if (x === "") {
    alert('Please Enter Your Email')
  }
  if (document.getElementById('reg_email').innerHTML = /@gmail.com|@yahoo.com|@cput.ac.za|@northlink.co.za/.test(x)) {
    document.getElementById('reg_email').style.color = 'green';
  } else {
    document.getElementById('reg_email').style.color = 'red';
    alert('Please Enter A Real Email Adress');
  }
}

function regPasswordFunc() {
  let x = document.getElementById('reg_password').value;
  localStorage.password = x;
  if (x === "") {
    alert('Please Enter Your Password')
  }
}

function regPasswordConfirmFunc() {
  let x = document.getElementById('reg_passwordConfirm').value;
  localStorage.passwordConfirm = x;
  if (document.getElementById('reg_password').value !== document.getElementById('reg_passwordConfirm').value) {
    alert('The passwords do not match!')
  }
}
// REGISTER SUBMIT AND DISSAPEAR
function registerSubmit() {
  if (document.getElementById('reg_name').style.color == "green" &&
  document.getElementById('reg_email').style.color == 'green') {
    document.getElementById('ls').style.display = 'none';
    document.getElementById('iText').style.display = 'inline';
    document.getElementById('welcomeText').innerHTML = "Welcome " + document.getElementById('reg_name').value.toUpperCase();
    document.getElementById('underText').innerHTML = "Hey, " + document.getElementById('reg_name').value.toLowerCase() + ". Enjoy your stay :) and check out our menu below:";
    document.getElementById('loginExplode').style.display = "none";

  }
    document.getElementById('hotLink').href = "file:///C:/Coffee-shop/menu.html";
    document.getElementById('coldLink').href = "file:///C:/Coffee-shop/menu.html";
    document.getElementById('dessertLink').href = "file:///C:/Coffee-shop/menu.html";
    document.getElementById('specialLink').href = "file:///C:/Coffee-shop/menu.html";
    document.getElementById('homeLink').href = "file:///C:/Coffee-shop/index.html#";

}


// USER CLICKS ON FIRST PAGE login
function loginPopup() {

  document.getElementById('iText').style.display = 'none';
  document.getElementById('ls').style.display = 'block';
}


// AFTER LOGIN AND REGISTER , TEXT REAPPEARS WITH Name
// function reappear() {
//   document.getElementById('iText').style.display = 'inline';
// }

// function destroyStorage() {
//   localStorage.removeItem("key");
//

 // SEARCH BAR
 function searchBarFunc() {
   document.getElementById('searchingBar').style.display = 'inline';

 }

 function searchFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function closeSearchFunc() {
  document.getElementById('searchingBar').style.display = 'none';
}
