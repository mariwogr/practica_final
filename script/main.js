/*
In feed section, there will be posts, identified by the string 'feed_post_(postId)'.
Inside a post there is a section for comments, where comments are appended.
A comment is identified by the string 'feed_post_comment_(commentId)'.
Comments have a pointer to tell which post they belong to.
Inside comments there is a section for replies, where they are appended.
Replies do not have identification, but class. The replies.json file have a pointer
to identify the comment they are pointing to.
*/

var loaded_experiences = 0;

//------------------[Dropdown Function]------------------

function myFunction(){
    // Show dropdown
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    // Checks if dropdown is clicked
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown_content");
        for (let i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}

//------------------[Cookie´s Functions]------------------
function createCookie(expdays){
    const time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();
    var user = document.getElementById("SignUp_form").elements["username"].value;
    var pwd = document.getElementById("SignUp_form").elements["pwd"].value;
    var name = document.getElementById("SignUp_form").elements["name"].value;
    var lastn = document.getElementById("SignUp_form").elements["lname"].value;
    var email = document.getElementById("SignUp_form").elements["email"].value;
    var date = document.getElementById("SignUp_form").elements['date'].value;
    var img = document.getElementById("SignUp_form").elements['im_per'].value;
    var interes = document.getElementById("SignUp_form").elements["interes"].value;
    
    if (checkEmail(email)){
        alert("Ya existe una cuenta asociada a dicho correo cree otro usuario de nuevo con diferente cuenta de correo");
        return;
    }

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
    }
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

function checkEmail(email){

    if(email == getCookie("email")){
        return true;
    }
}

function checkCookie() {
    var cookie = document.cookie;
    if(cookie.length <= 92){
        return;
    }
    else{
        document.getElementById("LogIn").style.display = "none";
        document.getElementById("SignUp").style.display = "none";
        document.getElementById("UserImProfile").style.display = "inline";
        document.getElementById("UserImProfile").style.visibility = "visible";

        document.getElementById("NameUser").style.display = "inline";
        document.getElementById("NameUser").style.visibility = "visible";
        document.getElementById("NameUser").innerText = getCookie("usuario");

        document.getElementById("user_div").style.width = "372.75px";
        
        document.getElementById("dropdown").style.display = "inline";
        document.getElementById("dropdown").style.visibility = "visible";

        document.getElementById("menu_margin").style.margin ="auto auto auto 11%";

        if(getCookie("imagen")!= ""){
            document.getElementById("UserImProfile").src = getCookie("imagen");
        }        
    }
}

function setTextUser(){
    var user = getCookie("usuario");
    var nombre = getCookie("name");
    var last_n = getCookie("lastname");
    var email = getCookie("email");
    var interes = getCookie("interes");
    var img = getCookie("imagen");
    document.getElementById("usern").innerText = user;
    document.getElementById("name").innerText = nombre;
    document.getElementById("last_name").innerText = last_n;
    document.getElementById("email").innerText = email;  
    document.getElementById("Interes").innerText = interes; 
    if(img!=""){
        document.getElementById("img").src = img;
    }
}

function changeData(expdays){
    const time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();

    var user = document.getElementById("Change_form").elements["username"].value;
    if(user != ""){
        document.cookie = "usuario=" + user + ";" + expires + ";path=/";
    }
    
    var interes = document.getElementById("Change_form").elements["interes"].value;
    document.cookie = "interes=" + interes + ";" + expires + ";path=/";

    var img = document.getElementById("Change_form").elements["im_per"].value;
    if(img != ""){
        document.cookie = "imagen=" + img + ";" + expires + ";path=/";
    }
    

    window.location.href = "#";
}


function load_feed(how_many = 3){
    // Load feed posts and their comments
    var feed_file = $.get("../jsons/feed.json");
    console.log(feed_file);
    var feed = JSON.parse(feed_file);
    var comments = JSON.parse("../jsons/comments.json");
    var replies = JSON.parse("../jsons/replies.json");

    // Create a HTML entry for each feed post
    for(let i = loaded_experiences; i < min(loaded_experiences + how_many, feed.length); i++){
        $('feed').prepend(convert_to_html(feed[i], 'f'));
        // Find the comments of the ith post and append them
        for(let j = 0; j < comments.length(); j++){
            if(comments[j].feed_id === feed[i].id){
                $('feed_post_${feed[i].id}.feed_comment_section').append(convert_to_html(comments[j], 'c'));
            }
            // Find the replies of the jth comment and append them
            for(let k = 0; k < replies.length(); k++){
                if(replies[k].comment_id === comments[i].comment_id){
                    $('feed_post_comment_${comment_id}.comment_bottom').append(convert_to_html(replies[k], 'r'));
                }
            }
        }
    }
    // Update index to load next experiences when clicking 'browse_more' button
    loaded_experiences += how_many;
}

function convert_to_html(json_info, type){
    /* Transforms into HTML the information of the json provided.
       Current supported types: "f" for feed post; "c" for comment;
       "r" for reply.*/
    if(type === 'f'){
        return '<div id="feed_post_${json_info.id}">\
                    <div class="feed_top">\
                        <img src="" alt="Profile image of ${json_info.usr}">\
                        <p class="user_name">${json_info.usr}</p>\
                    </div>\
                    <div class="feed_body">\
                        <img src="${json_info.src}" alt="image post"}>\
                        <p>${json_info.descr}</p>\
                    </div>\
                    <div class="feed_bottom">\
                        <img src="" class="like_button" alt="like icon">\
                        <p>${json_info.likes} likes</p>\
                        <img src="" class="comment_button" alt="comments icon">\
                        <p>see ${json_info.comments} comments</p>\
                    </div>\
                    <div class="feed_comment_section">\
                    </div>\
                </div>';
    }
    else if(type === 'c'){
        return '<div id="feed_post_comment_${comment_id}">\
                    <div class="comment_top">\
                        <img src="" alt="Profile image of ${json_info.usr}">\
                        <p class="comment_info">Commented by ${json_info.usr} on ${json_info.date}</p>\
                        <img src="" class="like_button" alt="like icon">\
                        <p>${json_info.likes} likes</p>\
                    </div>\
                    <div class="comment_body">\
                        <p>${json_info.text}</p>\
                    </div>\
                    <div class="comment_bottom">\
                    </div>\
                </div>';
    }
    else if(type === 'r'){
        return '<div class="feed_post_comment_reply">\
                    <div class="reply_top">\
                        <img src="" alt="Profile image of ${json_info.usr}">\
                        <p class="comment_info">Commented by ${json_info.usr} on ${json_info.date}</p>\
                        <img src="" class="like_button" alt="like icon">\
                        <p>${json_info.likes} likes</p>\
                    </div>\
                    <div class="reply_body">\
                        <p>${json_info.text}</p>\
                    </div>\
                </div>';
    }
    else{
        return '<div class="feed_error"><p>Error loading post or comment.</p></div>';
    }
}