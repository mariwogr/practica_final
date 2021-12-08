/* This file contains the functions that will build the sign in and sign up */

function createCookie(expdays){
    // Check if user is already registered
    if (checkUser(signup_uname.value)){
        alert("There is already an account associated with this username. Create a new account with a diferent username or sign in.");
        return;
    }    
    // Get cookie data from form
    var time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();
    
    // Collects all the data and saves it into a dictionary
    var dict = {
        usr: signup_uname.value,
        img: im_per.value,
        pwd: signup_pwd.value,
        email: signup_email.value
    };

    // Saves the new user_data in the "cookie" of the localStorage
    saveLocal("user_data", dict);

    // Also, saves the user in the cookie
    document.cookie = `usuario=${dict.usr};${expires};path=/`;
    document.cookie = `pwd=${dict.pwd};${expires};path=/`;
    document.cookie = `email=${dict.email};${expires};path=/`;
    document.cookie = `mode=light-mode;${expires};path=/`;

    // If the img is something, it sticks the url's image in the cookie
    if(dict.img != ""){
        document.cookie = `imagen=${dict.img};${expires};path=/`;
    } 
    // Else, it do not save anything in the image
    else{
        document.cookie = `imagen=;${expires};path=/`;
    }

    // If all data is correct it lets the user in the page (signed up)
    if(dict.usr != "" && dict.pwd != "" && dict.email != ""){
        window.location.href = "main.html";
        alert("welcome!!");
    }
}

function getCookie(cname){
    // Returns the cookie which name matches 'cname'
    let name = cname + "=";
    let decodeCookie = decodeURIComponent(document.cookie);
    let cake = decodeCookie.split(";");
    let x = '';
    for(let i = 0; i < cake.length; i++){
        x = cake[i].trim();
        if(x.indexOf(name) == 0){
            return x.substring(name.length, x.length);
        }
    }
    return "";
}


function checkUser(user){
    // This will check the user in the localStorage if it she/he has signed up already in the web.

    if (!localStorage.getItem("user_data")){
        localStorage.setItem("user_data", "[]");
    }

    let user_data = JSON.parse(localStorage.getItem("user_data"));
    for (let i = 0; i < user_data.length; i++) {
        if (user_data[i]["usr"] === user){
            return true;
        }
    }
    return false;
}


//------------------[LocalStorage Functions]------------------

function saveLocal(where, data){
    /* This function will let us to save a json content @param data in the localStorage
    of the session. @param where will have the value of the arrays of json content such as
    feed, comments or user_data.*/

    // If the arrays of json in @param where of localStorage is not defined it will set a empty array in it.

    if (!localStorage.getItem(where)){
        localStorage.setItem(where, "[]");
    }
        
    let user_data = JSON.parse(localStorage.getItem(where));

    user_data.push((data));

    localStorage.setItem(where, JSON.stringify(user_data));
}