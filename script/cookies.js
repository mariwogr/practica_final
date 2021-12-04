/* This file contains the functions that will build the sign in and sign up */
console.log("hola");

function createCookie(expdays){
    console.log(expdays);
    const time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();
    var user = signup_uname.value;
    var pwd = signup_pwd.value;
    var email = signup_email.value;
    
    if (checkUser(user)){
        alert("Ya existe una cuenta asociada a dicho correo cree otro usuario de nuevo con diferente cuenta de correo");
        return;
    }

    $.get("jsons/cookies.json", (data) => {
        globalThis.txt = data;
    });

    let dict = {"username": user, "password": pwd, "email": email, "profile_img": "", "total_likes":"", "experiences":[]};
    console.log(globalThis.txt)
    globalThis.txt.push(dict);

    $.post("jsons/cookies.json", (data) => {
        data = globalThis.txt;
        console.log(data);
    });


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

function getCookie(user){
    // Returns a specific cookie passed as parameter

    console.log("hola");
    console.log(user);
    $.get("jsons/cookies.json", (data) => {
        globalThis.txt = data;
    });
    
    for(let i = 0; i < globalThis.txt.length;i++){
        let u = globalThis.txt[i];
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
