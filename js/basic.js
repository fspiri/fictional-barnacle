const LOGINVIEW_ADDRESS = '../html/logging/logView.html'
const REGISTERVIEW_ADDRESS = '../html/logging/regView.html'

function loginPress(){
    location.replace(LOGINVIEW_ADDRESS);
}
function registerPress(){
    location.replace(REGISTERVIEW_ADDRESS);
}

function getName(){
    return "Alfonso";
}

function userAreaSelected(){
    ta = document.getElementById("login_user");
    if(ta.value === "user"){
        ta.value = "";
    }
}
function pwAreaSelected(){
    ta = document.getElementById("login_pw");
    if(ta.value === "password"){
        ta.value = "";
    }
}
function confirmPwAreaSelected(){
    ta= document.getElementById("login_pw2");
    if(ta.value === "confirm pw"){
        ta.value = "s"
    }
}
//COSE UTILI
// document, location, window
