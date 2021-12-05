/*
In feed section, there will be posts, identified by the string 'feed_post_(postId)'.
Inside a post there is a section for comments, where comments are appended.
A comment is identified by the string 'feed_post_comment_(commentId)'.
Comments have a pointer to tell which post they belong to.
Inside comments there is a section for replies, where they are appended.
Replies do not have identification, but class. The replies.json file have a pointer
to identify the comment they are pointing to.
*/

var comments =  [
                    {
                        feed_id: 2,
                        comment_id: 0,
                        usr: "jose",
                        date: "5/12/2021",
                        text: "Nice trip bro",
                        likes: 0
                    },
                    {
                        feed_id: 2,
                        comment_id: 1,
                        usr: "hasbulla",
                        date: "5/12/2021",
                        text: "Da menschen vodka!",
                        likes: 0
                    }
                ];
var feed =      [
                    {
                        id: 0,
                        src: "https://ih1.redbubble.net/image.557168243.2784/flat,1000x1000,075,f.jpg",
                        usr: "el pibe",
                        descr: "finisterre",
                        date: "12/03/2004",
                        likes: 245,
                        comments: 0
                    },
                    {
                        id: 1,
                        src: "https://pbs.twimg.com/media/FD33F3UXIAIe2bd.jpg",
                        usr: "hashbulla",
                        descr: "de panafrescos",
                        date: "23/10/2020",
                        likes: 4524,
                        comments: 0
                    },
                    {
                        id: 2,
                        src: "https://services.meteored.com/img/article/en-saturno-llueven-diamantes-263801-1_1280.jpg",
                        usr: "pepe",
                        descr: "D vacas por saturno",
                        date: "4/12/2021",
                        likes: 20,
                        comments: 2
                    },
                    {
                        id: 3,
                        src: "http://www.pixelstalk.net/wp-content/uploads/2016/10/Download-Images-Disney-Computer-HD.jpg",
                        usr: "jose",
                        descr: "Nice lil' mouse, dont ya think?",
                        date: "5/12/2021",
                        likes: 10,
                        comments: 0
                    },
                    {
                        id: 4,
                        src: "https://wallup.net/wp-content/uploads/2016/01/136128-mountain-lake-trees.jpg",
                        usr: "juan",
                        descr: "Enjoying the mountain",
                        date: "6/12/2021",
                        likes: 0,
                        comments: 0
                    }
                ];

var top_pointer = 3;
var bottom_pointer = 1;

function set_up(){
    checkCookie();
    load_feed(top_pointer, bottom_pointer);
}

//------------------[Ranking Functions]------------------

function showRanking(){
    var dict = {};
    for (let i=0; i < feed.length; i++){

        let user = feed[i]["usr"];

        if (dict[user]==undefined){
            dict[user] = [feed[i]["likes"], feed[i]["src"]];
        }
        else{
            dict[user][0] += feed[i]["likes"];
            dict[user][1] = feed[i]["src"];
        }
    }
    
    sorted_dict = sortDict(dict);

    for (let i = 0; i < 10 && i < Object.keys(sorted_dict).length;i++){
        $('#ranking_experiences').append(convert_to_html([Object.keys(sorted_dict)[i],
            Object.values(sorted_dict)[i][0], 
            Object.values(sorted_dict)[i][1]], 'r'));
    }
}

function sortDict(dict) {

    //console.log(Object.keys(dict));
    //console.log(Object.values(dict));

    let sorted_dict = {};

    while (Object.keys(dict).length != 0){
        var max_likes_user = Object.keys(dict)[0];
        var max_likes_list = Object.values(dict)[0];

        for (let j=0; j<Object.keys(dict).length; j++){
            if (max_likes_user != Object.keys(dict)[j] || Object.keys(dict).length == 1){
                if (Object.values(dict)[j][0] > max_likes_list[0]) {
                    max_likes_user = Object.keys(dict)[j];
                    max_likes_list = Object.values(dict)[j];
                }
            }
        }

        delete dict[max_likes_user];
        sorted_dict[max_likes_user] = max_likes_list;
    }
    return sorted_dict;
}

//------------------[Dropdown Function]------------------

function myFunction(){
    // Show dropdown
    document.getElementById("myDropdown").classList.toggle("show");
    // $('#myDropdown').css('visibility', 'visible');
    // $('#myDropdown').css('display', '');
}

window.onclick = function(event){
    // Checks if dropdown is clicked
    if (event.target.matches('.dropbtn')) {
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

function checkCookie(){
    var cookie = document.cookie;
    //alert(cookie.length);
    if(cookie.length <= 24){
        return;
    }
    else{
        document.getElementById("signin__button").style.visibility="hidden";
        document.getElementById("signin__button").style.display="none";

        document.getElementById("NameUser").style.visibility = "visible";
        document.getElementById("NameUser").style.display = "inline";
        document.getElementById("NameUser").innerText = getCookie("usuario");
        
        document.getElementById("dropdown").style.display = "inline";
        document.getElementById("dropdown").style.visibility = "visible";

        document.getElementById("user_signin").style.width = "372.75px";

        if(getCookie("imagen")!=""){
            document.getElementById("user_img").src = getCookie("imagen");
        }
    }
}

function myFunction(){
    // Show dropdown
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    // Checks if dropdown is clicked

    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
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


function checkUser(user){
    return getCookie(user);
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

function post_comment(id) {
    var username = "pepapig";
    if(username === ""){
        console.log("User is not registered");
        return;
    }
    var time = new Date();
    time.setTime(time.getTime());
    var comment = {
                    feed_id: id,
                    comment_id: get_comment_id(),
                    usr: "nolose",
                    date: time.toUTCString(),
                    text: $(`#comment_text_box_${id}`).val(),
                    likes: 0
                  };
    $(`#feed_comment_section_${id}`).prepend(convert_to_html(comment, 'c'));
}

function get_comment_id() {
    // Generates a random id for a comment. Cannot obtain it from comments.json
    // because new comments cannot be stored there, so info won't be updated.
    return Math.floor(Math.random()*10 + 5);
}

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

function load_older(){
    // get the "posts window" size
    let loaded_experiences = top_pointer - bottom_pointer + 1;
    // adapt bottom pointer to the new situation (at most 3 more old posts)
    if(bottom_pointer >= 3){ bottom_pointer -= 3; } else { bottom_pointer = 0; }
    // already have bottom pointer set, now define the top of the new chunk to load
    let new_load_top = top_pointer - loaded_experiences;

    load_feed(new_load_top, bottom_pointer, false);
}

function load_new(){
    // get the "posts window" size
    let loaded_experiences = top_pointer - bottom_pointer + 1;
    // adapt top pointer to the new situation (at most 3 more new posts)
    if(top_pointer <= feed.length - 4){ top_pointer += 3; } else { top_pointer = feed.length - 1; }
    // already have top pointer set, now define the bottom of the new chunk to load
    let new_load_bottom = bottom_pointer + loaded_experiences;
    
    load_feed(top_pointer, new_load_bottom, true);

}
/*
[6]
[5]
[4]
-----
[3]   <- top_i
[2]
[1]   <- bottom_i
-----
[0]
*/
function load_feed(top_i, bottom_i, want_new){
    /* 
        This function writes to the html posts ranging from 'top_i' to 'bottom_i', which are 
        valid indexes of the 'feed' array. These indexes define the "posts window", which is the
        portion of the 'feed array' that is being shown.
        'want_new' is a boolean: true means load new content; false means load old content
    */
    // Create a HTML entry for each feed post
    for(let i = top_i; i >= bottom_i; i--){
        want_new ? $('#feed_experiences').prepend(convert_to_html(feed[i], 'f')) : $('#feed_experiences').append(convert_to_html(feed[i], 'f'));
        // Find the comments of the ith post and append them
        for(let j = 0; j < comments.length; j++){
            if(comments[j].feed_id == feed[i].id){
                $(`#feed_comment_section_${feed[i].id}`).append(convert_to_html(comments[j], 'c'));
            }
        }
    }
}

function convert_to_html(json_info, type){
    /* Transforms into HTML the information of the object provided.
       Current supported types: "f" for feed post; "c" for comment;
       "r" for ranking info.*/
    if(type === 'f'){
        return `<br>
                <div class="feed_item" id="feed_post_${json_info.id}">
                    <div class="feed_top">
                        <div class="feed_user_info">
                            <img class="feed_user_img" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="Profile image of ${json_info.usr}">
                            <p class="text_font">${json_info.usr}</p>
                        </div>
                        <div class="feed_date">
                            <p class="text_font_date">Posted on ${json_info.date}</p>
                        </div>
                    </div>
                    <div class="feed_body">
                        <img class="feed_img" src="${json_info.src}" alt="image post"}>
                        <p class="text_font">${json_info.descr}</p>\
                    </div>
                    <div class="feed_bottom">
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="like icon">
                            <p class="text_font">${json_info.likes} likes</p>
                        </div>
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/material-rounded/64/000000/comments--v1.png" alt="comments icon">
                            <p class="text_font">see ${json_info.comments} comments</p>
                        </div>
                    </div>
                    <br>
                    <div class="feed_user_comment" >
                    
                        <div class="comment_section">
                            <img class="comment_icon_button" src="https://img.icons8.com/material-outlined/64/000000/comments--v1.png" alt="comments icon">
                        </div>
                        <div class="comment_body">
                            <img class="comment_user_img" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="Profile image of ${json_info.usr}">
                            <p class="comment_user_text_font">PepaPig</p>

                            <input id="comment_text_box_${json_info.id}" class="comment_text_box" "type="text" placeholder="Write something" required>
                            <button id="feed_comment_button_${json_info.id}" onclick="post_comment(${json_info.id});" class="button_settings">Comment</button>
                        </div>
                    </div>
                    <br>
                    <div class="feed_comment_section" id="feed_comment_section_${json_info.id}"></div>
                </div>
                <br>`;
    }
    else if(type === 'c'){
        return `<div class="feed_post_comment" id="feed_post_comment_${json_info.comment_id}">
                    <div class="comment_section">
                        <img class="comment_icon_button" src="https://img.icons8.com/material-rounded/64/000000/comments--v1.png" alt="comments icon">
                        <p class="text_font_date">Commented on ${json_info.date}</p>
                    </div>
                    <div class="comment_body">
                        <img class="comment_user_img" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="Profile image of ${json_info.usr}">
                        <p class="comment_user_text_font">${json_info.usr}</p>
                        <div class="comment_text_box">
                            <p class="text_font">${json_info.text}</p>
                        </div>
                    </div>
                    <div class="comment_bottom">
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="like icon">
                            <p class="text_font">${json_info.likes} likes</p>
                        </div>
                    </div>
                </div>
                <br>`;
    }
    else if(type === 'r'){
        return `<div class="ranking_div">
                    <img class="icon_ranking" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png">
                    <p class="text_font">${json_info[0]}</p>
                    <img class="img_ranking" src="${json_info[2]}">
                    <p class="text_font">${json_info[1]}</p>
                </div>
                <br>`;

    }
    else{
        return '<div class="feed_error"><p>Error loading post or comment.</p></div>';
    }
}

/*---------------------------------footer's icons-----------------------*/

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