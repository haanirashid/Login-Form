console.log("testing");


var domName = document.getElementById("naam");
var domemail = document.getElementById("mail");
var dompass = document.getElementById("pass");
var nameArray = [];
var emailArray = [];
var passArray = [];

function submitData(event) {
    event.preventDefault();
    var inputName = document.getElementById("name").value;
    var inputEmail = document.getElementById("email").value;
    var inputPassword = document.getElementById("password").value;
    nameArray.push(inputName);
    emailArray.push(inputEmail);
    passArray.push(inputPassword);
    domName.innerHTML = nameArray;
    domemail.innerHTML = emailArray;
    dompass.innerHTML = passArray;
    console.log(nameArray);
    console.log(emailArray);
    console.log(passArray);
}