const loginButton = document.getElementById('loginBtn');
const registerButton = document.getElementById('registerBtn');
let div1 = document.getElementById('hide');
var firstname1 = document.getElementById("email").value;
var firstname2 = document.getElementById("password").value;
let userEmail = ""
let userPassword = ""
var toggle = true;

document.getElementById('rEmail').style.display = 'none';
document.getElementById('rPassword').style.display = 'none';


loginButton.addEventListener('click', function() {
  firstname1 = document.getElementById("email").value;
  firstname2 = document.getElementById("password").value;
  if (toggle == true) {
    if (firstname1 == userEmail && firstname2 == userPassword) {
      alert("Right Password");
      location.replace("https://youtu.be/LDU_Txk06tM?t=71");

    } else {
      alert("Wrong Password");
    }
  } else {
    userEmail = document.getElementById("rEmail").value;
    userPassword = document.getElementById("rPassword").value;
    document.getElementById('rEmail').style.display = 'none';
    document.getElementById('rPassword').style.display = 'none';
    document.getElementById('email').style.display = 'block';
    document.getElementById('password').style.display = 'block';
    document.getElementById('message-header').textContent = 'Login'
    loginButton.textContent = 'Login'
    toggle = true;
  }
})

registerButton.addEventListener('click', function() {
  if (toggle) {
    document.getElementById('rEmail').style.display = 'block';
    document.getElementById('rPassword').style.display = 'block';
    document.getElementById('email').style.display = 'none';
    document.getElementById('password').style.display = 'none';
    document.getElementById('message-header').textContent = 'Register'
    loginButton.textContent = 'Register'
    toggle = false;
  }
  else {
    document.getElementById('rEmail').style.display = 'none';
    document.getElementById('rPassword').style.display = 'none';
    document.getElementById('email').style.display = 'block';
    document.getElementById('password').style.display = 'block';
    document.getElementById('message-header').textContent = 'Login'
    loginButton.textContent = 'Login'
    toggle = true;
  }
})