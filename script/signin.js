//This file contains the code about log in 

function sign_in() {
    /* This function will allow the user to sign in. */
    if (!localStorage.getItem("user_data")){
        alert("This user does not exist");
        return;
    }else{

        // It checks in the user_data of the localStorage if the user is already in it.
        var user = document.getElementById("form_body").elements["user"].value;
        var pwd = document.getElementById("form_body").elements["password"].value;

        let user_data = JSON.parse(localStorage.getItem("user_data"));

        for (let i = 0; i < user_data.length; i++) {
            if (user_data[i]["usr"] === user && user_data[i]["pwd"] === pwd){
                
                var time = new Date();
                time.setTime(time.getTime() + (365 * 24*60*60*1000));
                let expires = "expires=" + time.toUTCString();

                document.cookie = "usuario="  + user_data[i]["usr"] +";" + expires + ";path=/";
                document.cookie = "pwd="  + user_data[i]["pwd"] +";" + expires + ";path=/";
                document.cookie = "email="  + user_data[i]["email"] +";" + expires + ";path=/";
                if(user_data[i]["img"] != ""){
                    document.cookie = "imagen="+ user_data[i]["img"] + ";" + expires + ";path=/";
                }
                window.location.href = "main.html";
                alert("welcome!");
            }
        }
        alert("This user does not exist");
        return;
    }
}