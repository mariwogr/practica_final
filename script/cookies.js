/* This file contains the functions that will build the sign in and sign up */

import { open } from './fs/promises';


function createCookie(expdays){
    console.log("hola");
    const time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();
    /*
    var user = signup_uname.value;
    var pwd = signup_pwd.value;
    var email = signup_email.value;
    */
    //if (checkUser(user)){
    if (checkUser($('signup_uname').value)){
        alert("Ya existe una cuenta asociada a dicho correo cree otro usuario de nuevo con diferente cuenta de correo");
        return;
    }
    
    
    let data = getData();
    
    let dict = {"username": "peepo", "password": "h", "email": "hola", "expires": expires, "profile_img": "", "total_likes":"", "experiences":[]};
    //let dict = {"username": user, "password": pwd, "email": email, "expires": expires, "profile_img": "", "total_likes":"", "experiences":[]};
    console.log(dict);
    
    
    pushData(dict);
    
    /*
    document.cookie = "usuario=" + user + ";" + expires + ";path=/";
    document.cookie = "pwd=" + pwd + ";" + expires + ";path=/";
    document.cookie = "name=" + name + ";" + expires + ";path=/";
    document.cookie = "lastname=" + lastn + ";" + expires + ";path=/";
    document.cookie = "email=" + email + ";" + expires + ";path=/";
    document.cookie = "date=" + date + ";" + expires + ";path=/";
    if(img != ""){
        document.cookie = "imagen=" + img + ";" + expires + ";path=/";
        document.getElementById("UserImProfile").src = img;
    }
    
    document.cookie = "interes=" + interes + ";" + expires + ";path=/";

    if(user!="" && pwd!="" && name!="" && lastn!="" && email!="" && date!=""){
        window.location.href = "#"
    }*/
}
/*
function WriteToFile() {
 
    let fso = new CreateObject("firefox.application"); 
    let s   = fso.CreateTextFile("jsons/filename.txt", True);
 
    var firstName = "Mario";
    var lastName  = "Pepa";
 
    s.writeline("First Name :" + FirstName);
    s.writeline("Last Name :" + lastName);
 
    s.writeline("-----------------------------");
    s.Close();
}*/

function pushData(dict) {
    /*var scriptUrl = "jsons/cookies.json";
    var l = [];
    $.ajax({
        url: scriptUrl,
        type: 'POST',
        dataType: 'json',
        async: false,
        data: dict
    });*/
    
    

    const fs = require('fs');

    const content = 'Some content!';

    let file = fs.open('test.txt', 'r');
    

    file.close();
    //file written successfully
    
    

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

function getCookie(user){
    // Returns a specific cookie passed as parameter

    let data = getData();
    
    for(let i = 0; i < data.length; i++){
        let u = data[i];
        if (u["username"] == user) {return u;}
    }
    return false;
    
}
/*
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
*/
function checkUser(user){
    return getCookie(user);
}
