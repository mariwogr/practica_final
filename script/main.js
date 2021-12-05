//const fs = require('fs').promises;
//import {fs} from 'fs';
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
    if (!event.target.matches('.icon_button')) {
        console.log(event.target);
        return;
        var icons = $('.icon_button');
        for (let i = 0; i < icons.length; i++) {
            icons.pepe;
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

/*
async function read_file(path){
    try {
        var data = await fs.readFile(path);
    } catch (error) {
        console.error('Got an error trying to read the file: ${error.message}');
    }
    data = data.toString();
    return data;
    return  fs.readFile(path, 
                        'utf8', 
                        function(err, data) {
                            if(err){ console.log(err); return null;}
                            return data;
                        }
                        );
}
*/
function read_file(path) {
    var result = null;
    var scriptUrl = path;
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

function load_feed(how_many = 3){
    // Load feed posts and their comments
    var feed = read_file('../jsons/feed.json');
    if (feed == null) {console.log('No feed file available');}
    var comments = read_file('../jsons/comments.json');
    if (comments == null) {console.log('No comments file available');}

    // Create a HTML entry for each feed post
    for(let i = loaded_experiences; i < Math.min(loaded_experiences + how_many, feed.length); i++){
        $('#feed_experiences').append(convert_to_html(feed[i], 'f'));
        // Find the comments of the ith post and append them
        for(let j = 0; j < comments.length; j++){
            console.log(comments.length);
            if(comments[j].feed_id == feed[i].id){
                $(`#feed_comment_section_${feed[i].id}`).append(convert_to_html(comments[j], 'c'));
            }
        }
    }
    // Update index to load next experiences when clicking 'browse_more' button
    loaded_experiences += how_many;
}

function convert_to_html(json_info, type){
    /* Transforms into HTML the information of the json provided.
       Current supported types: "f" for feed post; "c" for comment.*/
    if(type === 'f'){
        return `<br>
                <div class="feed_item" id="feed_post_${json_info.id}">\
                    <div class="feed_top">\
                        <div class="feed_user_info">
                            <img class="feed_user_img" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="Profile image of ${json_info.usr}">\
                            <p class="text_font">${json_info.usr}</p>\
                        </div>
                        <div class="feed_date">
                            <p class="text_font_date">Posted on ${json_info.date}</p>\
                        </div>
                    </div>\
                    <div class="feed_body">\
                        <img class="feed_img" src="${json_info.src}" alt="image post"}>\
                        <p class="text_font">${json_info.descr}</p>\
                    </div>\
                    <div class="feed_bottom">\
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="like icon">\
                            <p class="text_font">${json_info.likes} likes</p>\
                        </div>
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/material-rounded/64/000000/comments--v1.png" alt="comments icon">\
                            <p class="text_font">see ${json_info.comments} comments</p>\
                        </div>
                    </div>\
                    <div class="feed_post_comment" >\
                        <div class="comment_section">
                            <img class="comment_icon_button" src="https://img.icons8.com/material-rounded/64/000000/comments--v1.png" alt="comments icon">\
                        </div>
                        <div class="comment_body">\
                            <img class="comment_user_img" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="Profile image of ${json_info.usr}">\
                            <p class="comment_user_text_font">${json_info.usr}</p>\
                            <div class="comment_text_box">
                                <p class="text_font">${json_info.text}</p>\
                            </div>
                        </div>\
                    </div>
                    <div class="feed_comment_section" id="feed_comment_section_${json_info.id}"></div>\
                </div>
                <br>`;
    }
    else if(type === 'c'){
        return `<div class="feed_post_comment" id="feed_post_comment_${json_info.comment_id}">\
                    <div class="comment_section">
                        <img class="comment_icon_button" src="https://img.icons8.com/material-rounded/64/000000/comments--v1.png" alt="comments icon">\
                        <p class="text_font_date">Commented on ${json_info.date}</p>\
                    </div>
                    <div class="comment_body">\
                        <img class="comment_user_img" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="Profile image of ${json_info.usr}">\
                        <p class="comment_user_text_font">${json_info.usr}</p>\
                        <div class="comment_text_box">
                            <p class="text_font">${json_info.text}</p>\
                        </div>
                    </div>\
                    <div class="comment_bottom">
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="like icon">\
                            <p class="text_font">${json_info.likes} likes</p>\
                        </div>
                    </div>
                </div>
                <br>`;
    }
    else{
        return '<div class="feed_error"><p>Error loading post or comment.</p></div>';
    }
}


function hoverInst(element){
    element.setAttribute("src","images/icon/instagram_icon2.png");
}

function unhoverInst(element){
    element.setAttribute("src","images/icon/instagram_icon.png");
}

function hoverTwi(element){
    element.setAttribute("src","images/icon/twitter_icon2.png");
}

function unhoverTwi(element){
    element.setAttribute("src","images/icon/twitter_icon.png");
}

function hoverF(element){
    element.setAttribute("src","images/icon/question_icon2.png");
}

function unhoverF(element){
    element.setAttribute("src","images/icon/question_icon.png");
}

function hoverC(element){
    element.setAttribute("src","images/icon/copyright_icon2.png");
}

function unhoverC(element){
    element.setAttribute("src","images/icon/copyright_icon.png");
}