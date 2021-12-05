/* This file contains the functions that will build the sign in and sign up */

//import { open } from './fs/promises';


function createCookie(expdays){
    const time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();
    
    var user = signup_uname.value;
    var pwd = signup_pwd.value;
    var email = signup_email.value;
    var img = im_per.value;
    

    if (checkUser(user)){
        alert("There is already an account associated with this username. Create a new account with a diferent username or sign in.");
        return;
    }    
    
    document.cookie = "usuario=" + user + ";" + expires + ";path=/";
    document.cookie = "pwd=" + pwd + ";" + expires + ";path=/";
    document.cookie = "email=" + email + ";" + expires + ";path=/";

    if(img != ""){
        document.cookie = "imagen=" + img + ";" + expires + ";path=/";
    }
    if(user != "" && pwd != "" && email != ""){
        window.location.href = "main.html";
        alert("welcome!!");
    }
}

function preview2(){
    // Preview img used on Change Form
    var img = document.getElementById("sign_up_form").elements['im_per'].value;
    document.getElementById("ImgPreV2").src = img;
    document.getElementById("ImgPreV2").style.display = "block";
    document.getElementById("ImgPreV2").style.visibility = "visible";

}

function getData() {
    var result = null;
    var scriptUrl = "jsons/cookies.json";
    $.ajax({
        url: scriptUrl,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            result = data;
        } 
     });
     return result;
}

function getCookie(cname){
    // Returns a specific cookie passed as paramete
    let name = cname + "=";
    let decodeCookie = decodeURIComponent(document.cookie);
    let cake = decodeCookie.split(";");
    for(let i = 0; i < cake.length; i++){
        let x = cake[i];
        while(x.charAt(0)==' '){
            x = x.substring(1);
        }
        if(x.indexOf(name)==0){
            return x.substring(name.length,x.length);
        }
    }
    return "";
}


function checkUser(user){
    return getCookie(user);
}
