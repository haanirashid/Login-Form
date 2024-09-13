console.log("testing");


var domName = document.getElementById("naam");
var domEmail = document.getElementById("mail");
var domPass = document.getElementById("pass");
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
    domEmail.innerHTML = emailArray;
    domPass.innerHTML = passArray;
};

function nameStartDel() {
    nameArray.shift()
    domName.innerHTML = nameArray;
};
function emailStartDel() {
    emailArray.shift()
    domEmail.innerHTML = emailArray;
};
function passStartDel() {
    passArray.shift()
    domPass.innerHTML = passArray;
};

function nameEndDel() {
    nameArray.pop()
    domName.innerHTML = nameArray;
};
function emailEndDel() {
    emailArray.pop()
    domEmail.innerHTML = emailArray;
};
function passEndDel() {
    passArray.pop()
    domPass.innerHTML = passArray;
};

function nameSplice(event) {
    event.preventDefault()
    var name_index_value = document.getElementById("name_index_value").value;
    var name_del_value = document.getElementById("name_del_value").value;
    var name_splice_value = document.getElementById("name_splice_value").value;
    nameArray.splice(name_index_value, name_del_value, name_splice_value);
    domName.innerHTML = nameArray;
};

function emailSplice(event) {
    event.preventDefault()
    var email_index_value = document.getElementById("email_index_value").value;
    var email_del_value = document.getElementById("email_del_value").value;
    var email_splice_value = document.getElementById("email_splice_value").value;
    emailArray.splice(email_index_value, email_del_value, email_splice_value);
    domEmail.innerHTML = emailArray;
};

function passSplice(event) {
    event.preventDefault()
    var pass_index_value = document.getElementById("pass_index_value").value;
    var pass_del_value = document.getElementById("pass_del_value").value;
    var pass_splice_value = document.getElementById("pass_splice_value").value;
    passArray.splice(pass_index_value, pass_del_value, pass_splice_value);
    domPass.innerHTML = passArray;
};