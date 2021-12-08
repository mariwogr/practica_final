/*
In feed section, there will be posts, identified by the string 'feed_post_(postId)'.
Inside a post there is a section for comments, where comments are appended.
A comment is identified by the string 'feed_post_comment_(commentId)'.
Comments have a pointer to tell which post they belong to.
*/

var top_pointer = 5;
var bottom_pointer = 3;

function set_up(){
    /* This function will be called every time the page is loaded and will
    set up the initial feed and comments to the website. Also, it will check if the
    user is logged in.*/

    var feed =      [
                        {
                            id: 0,
                            src: "https://kilometrosquecuentan.com/wp-content/uploads/2019/10/sierra-gata-paisaje.jpg",
                            usr: "pepe",
                            descr: "Cómo mola la sierra de Gata!",
                            date: "Thu, 12 Mar 2019 12:24:29 GMT",
                            likes: 150,
                            img: "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/Y7ITUEPBTFGQDLQKWWRQQ5C6KI.jpg",
                            comments: 0,
                            who_liked: []
                        },
                        {
                            id: 1,
                            src: "https://www.madridiario.es/fotos/1/1437374667_64d0894749194343353c52a2b9cf933d.jpeg",
                            usr: "StonksBoy",
                            descr: "euroes go brrr",
                            date: "Thu, 18 Mar 2019 12:00:29 GMT",
                            likes: 245,
                            img: "https://i.ytimg.com/vi/qCylpmEvDCg/maxresdefault.jpg",
                            comments: 0,
                            who_liked: []
                        },
                        {
                            id: 2,
                            src: "https://ih1.redbubble.net/image.557168243.2784/flat,1000x1000,075,f.jpg",
                            usr: "StonksBoy",
                            descr: "Bitcoin goes brrr",
                            date: "Thu, 12 Mar 2020 12:24:29 GMT",
                            likes: 245,
                            img: "https://i.ytimg.com/vi/qCylpmEvDCg/maxresdefault.jpg",
                            comments: 0,
                            who_liked: []
                        },
                        {
                            id: 3,
                            src: "https://estaticos-cdn.elperiodico.com/clip/1690d8dd-090b-42b7-b66f-4e8f2faa84cd_source-aspect-ratio_default_0.jpg",
                            usr: "Hasbulla",
                            descr: "готов сразиться с Бургиром",
                            date: "Fri, 23 Oct 2020 04:21:56 GMT",
                            likes: 4524,
                            img : "https://www.kolpaper.com/wp-content/uploads/2021/06/Hasbulla-Wallpaper-4.jpg",
                            comments: 0,
                            who_liked: []
                        },
                        {
                            id: 4,
                            src: "https://services.meteored.com/img/article/en-saturno-llueven-diamantes-263801-1_1280.jpg",
                            usr: "pepe",
                            descr: "De vacas por saturnooo",
                            date: "Sat, 04 Dic 2021 00:46:12 GMT",
                            likes: 20,
                            img: "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/Y7ITUEPBTFGQDLQKWWRQQ5C6KI.jpg",
                            comments: 2,
                            who_liked: []
                        },
                        {
                            id: 5,
                            src: "http://www.pixelstalk.net/wp-content/uploads/2016/10/Download-Images-Disney-Computer-HD.jpg",
                            usr: "Joline",
                            descr: "Nice lil' mouse, dont ya think?",
                            date: "Sun, 05 Dic 2021 23:01:00 GMT",
                            likes: 10,
                            img : "https://upload.wikimedia.org/wikipedia/commons/1/1f/Woman_1.jpg",
                            comments: 0,
                            who_liked: []
                        },
                        {
                            id: 6,
                            src: "https://wallup.net/wp-content/uploads/2016/01/136128-mountain-lake-trees.jpg",
                            usr: "juan.",
                            descr: "Enjoying the mountain",
                            date: "Mon, 06 Dic 2021 15:08:43 GMT",
                            likes: 0,
                            img : "https://i.ytimg.com/vi/BkgA2_sB6NM/maxresdefault.jpg",
                            comments: 0,
                            who_liked: []
                        },
                        {
                            id: 7,
                            src: "https://cdn.eldoce.tv/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/nota/2021/07/06/El%20ni%C3%B1o%20de%2018%20a%C3%B3s.jpg?itok=BG5eBfLG",
                            usr: "Hasbulla",
                            descr: "по панафреско",
                            date: "Tue, 07 Dic 2021 07:23:39 GMT",
                            likes: 4000,
                            img: "https://www.kolpaper.com/wp-content/uploads/2021/06/Hasbulla-Wallpaper-4.jpg",
                            comments: 0,
                            who_liked: []
                        },
                    ];

    var comments =  [
                        {
                            feed_id: 2,
                            comment_id: 0,
                            usr: "juan.",
                            date: "Sun, 05 Dec 2021 21:56:08 GMT",
                            text: "Nice trip bro",
                            img:"https://i.ytimg.com/vi/BkgA2_sB6NM/maxresdefault.jpg",
                            likes: 0,
                            who_liked: []
                        },
                        {
                            feed_id: 2,
                            comment_id: 1,
                            usr: "Hasbulla",
                            date: "Sun, 05 Dec 2021 17:01:32 GMT",
                            text: "КРУТО!",
                            img: "https://www.kolpaper.com/wp-content/uploads/2021/06/Hasbulla-Wallpaper-4.jpg",
                            likes: 0,
                            who_liked: []
                        }
                    ];
    // In case 'feed' does not exist, create it and add it every component
    if (!localStorage.getItem("feed")){
        localStorage.setItem("feed", "[]"); 
        for (let i = 0; i < feed.length; i++){
            saveLocal("feed", feed[i]);
        }
    }
    // In case 'comments' does not exist, create it and add it every component
    if (!localStorage.getItem("comments")){
        localStorage.setItem("comments", "[]");
        for (let i = 0; i < comments.length; i++){
            saveLocal("comments", comments[i]);
        }
    }
    
    // It will check if the user is logged
    checkCookie();

    // It will load the feed with a length defined by the two parameters of the call
    load_feed(top_pointer, bottom_pointer);
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
//------------------[Ranking Functions]------------------

function showRanking(){
    /* This function will show the Ranking. */

    // It calls the checkCookie fucntion to check if there is a logged user to set up the user data.
    checkCookie();

    // It gets the feed from the localStorage.
    let feed = JSON.parse(localStorage.getItem("feed"));

    // It creates a dictionary with the most liked users and their most recent photo, total likes and profile photo.
    var dict = {};

    // It iterates on the feed.
    for (let i=0; i < feed.length; i++){

        // It obtains the user i of the feed
        let user = feed[i]["usr"];

        // It checks if the dictionary has already the user data in it, if not it adds it.
        if (dict[user] == undefined){
            dict[user] = [feed[i]["likes"], feed[i]["src"], feed[i]["img"]];
        }

        // It adds the likes of every photo. It sets the most recent image and the user profile photo.
        else{
            dict[user][0] += feed[i]["likes"];
            dict[user][1] = feed[i]["src"];
            dict[user][2] = feed[i]["img"];
        }
    }
    
    // It calls the function sortDict to sort the dictionary with the most liked users.
    sorted_dict = sortDict(dict);

    // It iterates on the sorted dictionary @param sorted_dict to show the 10 most liked users or, 
    // if there are not enough users that posted a single experience it will show how many are there.
    for (let i = 0; i < Math.min(10, Object.keys(sorted_dict).length); i++){
        $('#ranking_experiences').append(convert_to_html(
            [Object.keys(sorted_dict)[i],
             Object.values(sorted_dict)[i][0], 
             Object.values(sorted_dict)[i][1],
             Object.values(sorted_dict)[i][2]], 
            'r'));
    }
}

function sortDict(dict) {
    /* This function will sort the dictionary of [user: [likes, mostLikedPhoto, profilePhoto]] */

    // It creates an empty dictionary.
    let sorted_dict = {};

    // While the dictionary is not empty
    while (Object.keys(dict).length != 0){

        // It stores the maximum liked user and its array [likes, mostLikedPhoto, profilePhoto]
        var max_likes_user = Object.keys(dict)[0];
        var max_likes_list = Object.values(dict)[0];

        // It iterates on every user.
        for (let j=0; j<Object.keys(dict).length; j++){

            // If the max_likes_user is not the j element of the dict or the length of the dict is 1 (because the max_likes_user is the same
            // as the only element in the dict).
            if (max_likes_user != Object.keys(dict)[j] || Object.keys(dict).length == 1){

                // It checks if the likes of the user is greater than the most liked user right now.
                if (Object.values(dict)[j][0] > max_likes_list[0]) {

                    // If it is, it changes the max_likes variables.
                    max_likes_user = Object.keys(dict)[j];
                    max_likes_list = Object.values(dict)[j];
                }
            }
        }

        // It deletes to the max_likes_user from the @param dict.
        delete dict[max_likes_user];

        // It adds to the sorted dict the most liked user.
        sorted_dict[max_likes_user] = max_likes_list;
    }
    
    // It returns the sorted dictionary
    return sorted_dict;
}

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

function logOut(){
    // Funtion to log out of the session
    const time = new Date();
    time.setTime(time.getTime() + (365 * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();

    // Borrow the elements of the cookies
    document.cookie = "usuario=;" + expires + ";path=/";
    document.cookie = "pwd=;" + expires + ";path=/";
    document.cookie = "email=;" + expires + ";path=/";
    document.cookie = "imagen=;" + expires + ";path=/";

    // Return to the Main Page
    window.location.href = "main.html";
}

function checkCookie(){
    /* Function to check if there is an active cookie and if it is it will show
     */

    // If there is no any cookie active, return the func
    if(getCookie("usuario")=="" && getCookie("email")=="" && getCookie("pwd")==""){
        return;
    }
    // In other case, start the auto login
    else{
        // Hide log in button
        document.getElementById("signin__button").style.display="none";

        // Show log in's elements
        document.getElementById("NameUser").style.visibility = "visible";
        document.getElementById("NameUser").style.display = "inline";
        document.getElementById("NameUser").innerText = getCookie("usuario");
        
        document.getElementById("dropdown").style.display = "inline";
        document.getElementById("dropdown").style.visibility = "visible";

        document.getElementById("user_signin").style.width = "372.75px";

        // If there is anyimage, set it as profile image

        if(getCookie("imagen") != ""){
            document.getElementById("user_img").src = getCookie("imagen");
        }
    }
}

function setTextUser(){
    /* Function to show current user data in 'change profile' section */
    $('#usern').text( getCookie("usuario") );
    $('#email').text( getCookie("email") ); 
    var img = getCookie("imagen"); 
    if(img != ""){
        $('#img').attr('src', img);
    }
}

function changeData(expdays){
    /* Function to change data in cookies*/
    var time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();

    var user = document.getElementById("Change_form").elements["username"].value;
    if(user != ""){
        document.cookie = `usuario=${user};${expires};path=/`;
    }

    var img = document.getElementById("Change_form").elements["im_per"].value;
    if(img != ""){
        document.cookie = `imagen=${img};${expires};path=/`;
    }
    window.location.href = "#";
}

function like(id, type){
    /* This function will allow an user to like: posts, if @param type is "post" or comment if @param type is "comment" */

    // It checks if the user is logged, if not it will throw the user to the sign in page.
    if(getCookie("usuario") == "" && getCookie("pwd") == "" && getCookie("email") == ""){
        window.location.href = "signin.html";
        alert("You must to be logged in");
    }
    
    if (type === "post") {
        // get stored items
        var feed = JSON.parse(localStorage.getItem("feed"));
        // define a new array because localStorage cannot be edited, so we have to create a new array
        var new_feed = [];
        var current_user = getCookie("usuario");
        // traverse feed array
        for (let i = 0; i < feed.length; i++) {
            // when we find the desired post...
            if (feed[i]["id"] == id) {
                // extract the list of users who liked the post and check if the current user belongs to the list
                var who_liked = feed[i]["who_liked"];
                if (who_liked.indexOf(current_user) > -1){
                    // because current user is in 'likes list', change like icon to gray heart (from like to unlike)
                    $(`#like_button_${id}`).attr('src', 'https://img.icons8.com/ios/50/000000/like--v1.png');
                    // remove current user from post's likes list
                    who_liked.splice(current_user);
                    // create an updated entry for feed by changing its like list and like counter
                    var modified_post = feed[i];
                    modified_post["who_liked"] = who_liked;
                    modified_post["likes"]--;
                    new_feed.push(modified_post);
                }
                // current user is not in likes list, so he has not liked the post yet
                else {
                    // set a red heart in like button
                    $(`#like_button_${id}`).attr('src', "https://img.icons8.com/ios-filled/50/000000/like--v2.png");
                    // append current user to the likes list of this post
                    who_liked.push(current_user);
                    // create an updated entry for feed by changing its like list and like counter
                    var modified_post = feed[i];
                    modified_post["who_liked"] = who_liked;
                    modified_post["likes"]++;
                    new_feed.push(modified_post);
                }
            }
            // posts that do not match the id are added directly to the new array
            else {
                new_feed.push(feed[i]);
            }
        }
        
        // It stores again the new feed in the localStorage. Also it modifies the likes counter.
        localStorage.setItem("feed", JSON.stringify(new_feed));
        $(`#likes_${id}`).text(`${modified_post["likes"]} likes`);

    } else if (type === "comment") {
        // get stored items
        var comments = JSON.parse(localStorage.getItem("comments"));
        // define a new array because localStorage cannot be edited, so we have to create a new array
        var new_comments = [];
        var liked_comment;
        var who_liked;
        var current_user = getCookie("usuario");

        // It iterates on the comments array
        for (let i = 0; i < comments.length; i++) {
            
            // when we find the desired feed...
            if (comments[i]["comment_id"] == id) {
                // extract the list of users who liked the post and check if the current user belongs to the list
                who_liked = comments[i]["who_liked"];
                liked_comment = comments[i];
                if (who_liked.indexOf(current_user) > -1){
                    // because current user is in 'likes list', change like icon to gray heart (from like to unlike)
                    $(`#like_comment_button_${id}`).attr('src', 'https://img.icons8.com/ios/50/000000/like--v1.png');
                    // remove current user from comment's likes list
                    who_liked.splice(current_user);
                    // create an updated entry for feed by changing its like list and like counter
                    var modified_comment = comments[i];
                    modified_comment["who_liked"] = who_liked;
                    modified_comment["likes"]--;
                    new_comments.push(modified_comment);
                }
                else {
                    $(`#like_comment_button_${id}`).attr('src', 'https://img.icons8.com/ios-filled/50/000000/like--v2.png');
                    // append current user to the likes list of this post
                    who_liked.push(current_user);
                    // create an updated entry for feed by changing its like list and like counter
                    var modified_comment = comments[i];
                    modified_comment["who_liked"] = who_liked;
                    modified_comment["likes"]++;
                    new_comments.push(modified_comment);
                }
            }
            // comments that do not match the id are added directly to the new array
            else { new_comments.push(comments[i]); }
        }

        // It stores again the new comments in the localStorage. Also it modifies the likes counter.
        localStorage.setItem('comments', JSON.stringify(new_comments));
        $(`#comments_likes_${id}`).text(`${liked_comment["likes"]} likes`);
    }
}

function post_comment(id) {
    // Check if user is registered
    if( getCookie("usuario") === '' && getCookie("pwd") === '' && getCookie("email") === ''){
        window.location.href = "signin.html";
        alert("You have to be registered!!");
        return;
    }
    // Get comment text and abort if it is empty
    var comment_text = $(`#comment_text_box_${id}`).val();
    if(comment_text == undefined){ return; }

    if (comment_text.length > 22) {
        $(`#alert_${id}`).css('display', 'block');
        return;
    }

    // Get the comments and fill an array with this post comments ids
    var comments = JSON.parse(localStorage.getItem("comments"));
    var post_comment_ids = [];
    for(let i = 0; i < comments.length; i++){
        if(comments[i].feed_id == id){
            post_comment_ids.push(comments[i].comment_id);
        }   
    }
    if(post_comment_ids.length){
        // Find the next available comment id
        post_comment_ids.sort();
        var next_id = post_comment_ids.pop() + 1;
    } else{
        var next_id = 0;
    }
    // Increment comment counter for this post
    plus_one_comment(id);
    // Get current date to display it in the comment
    var time = new Date();
    time.setTime(time.getTime());
    // Create comment object with appropiate data and insert it
    var comment = {
                    feed_id: id,
                    comment_id: next_id,
                    usr: $("#NameUser").text(),
                    date: time.toUTCString(),
                    text: comment_text,
                    img: $("#user_img").attr('src'),
                    likes: 0,
                    who_liked: []
                  };

    getCookie("mode") === "dark-mode" ? $(`#feed_comment_section_${id}`).prepend(convert_to_html(comment, 'c', '_dark_mode')) : $(`#feed_comment_section_${id}`).prepend(convert_to_html(comment, 'c'));

    saveLocal("comments", comment);
}

function plus_one_comment(id) {

    // It gets the feed from the localStorage.
    feed = JSON.parse(localStorage.getItem("feed"));

    // It creates an empty feed to add there the new feed with the one plus comment' comment.
    new_feed = [];
    var commented_post;

    // It iterates on the feed and if the id is the same it adds +1 in the number of comments.
    for (let i = 0; i < feed.length; i++) {
        if (feed[i]["id"] == id) {
            commented_post = feed[i];
            commented_post["comments"]++;
            new_feed.push(commented_post);
        }
        else {
            new_feed.push(feed[i]);
        }
    }

    // It saves the new feed into the localStorage. Also it updates the comments counter.
    localStorage.setItem("feed", JSON.stringify(new_feed));
    $(`#comments_${id}`).text(`see ${commented_post["comments"]} comments`);
}

function load_older(){
    // get the "posts window" size
    let loaded_experiences = top_pointer - bottom_pointer + 1;
    // adapt bottom pointer to the new situation (at most 3 more old posts)
    if(bottom_pointer >= 3){ bottom_pointer -= 3; } else { bottom_pointer = 0; }
    // already have bottom pointer set, now define the top of the new chunk to load
    let new_load_top = top_pointer - loaded_experiences;

    getCookie("mode") === "dark-mode" ? load_feed(new_load_top, bottom_pointer, false, '_dark_mode') : load_feed(new_load_top, bottom_pointer, false);
}

function load_new(){

    let feed = JSON.parse(localStorage.getItem("feed"));

    // get the "posts window" size
    let loaded_experiences = top_pointer - bottom_pointer + 1;
    // adapt top pointer to the new situation (at most 3 more new posts)
    if(top_pointer <= feed.length - 4){ top_pointer += 3; } else { top_pointer = feed.length - 1; }
    // already have top pointer set, now define the bottom of the new chunk to load
    let new_load_bottom = bottom_pointer + loaded_experiences;
    
    getCookie("mode") === "dark-mode" ? load_feed(top_pointer, new_load_bottom, true, '_dark_mode') : load_feed(top_pointer, new_load_bottom, true);
    
    document.getElementById("reload_icon").classList.toggle("reload_animation");
}

function load_feed(top_i, bottom_i, want_new, mode = ""){
    /* 
        This function writes to the html posts ranging from 'top_i' to 'bottom_i', which are 
        valid indexes of the 'feed' array. These indexes define the "posts window", which is the
        portion of the 'feed array' that is being shown.
        'want_new' is a boolean: true means load new content; false means load old content
    */
    // Create a HTML entry for each feed post

    let feed = JSON.parse(localStorage.getItem("feed"));
    let comments = JSON.parse(localStorage.getItem("comments"));
    
    for(let i = top_i; i >= bottom_i; i--){
        want_new ? $('#feed_experiences').prepend(convert_to_html(feed[i], 'f', mode)) : $('#feed_experiences').append(convert_to_html(feed[i], 'f', mode));
        // Find the comments of the ith post and append them
        for(let j = 0; j < comments.length; j++){
            if(comments[j].feed_id == feed[i].id){
                $(`#feed_comment_section_${feed[i].id}`).append(convert_to_html(comments[j], 'c', mode));
            }
        }
    }
}

function convert_to_html(json_info, type, mode = ""){
    /* Transforms into HTML the information of the object provided.
       Current supported types: "f" for feed post; "c" for comment;
       "r" for ranking info.
       Mode can be set to defautl or '_dark_mode' for dark mode*/

    if(type === 'f'){
        return `<br>
                <div class="feed_item" id="feed_post_${json_info.id}">
                    <div class="feed_top">
                        <div class="feed_user_info">
                            <img class="feed_user_img" src="${json_info.img}" alt="Profile image of ${json_info.usr}">
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
                            <img onclick="like(${json_info.id}, 'post');" class="icon_button" id="like_button_${json_info.id}" src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="like icon">
                            <p class="text_font" id="likes_${json_info.id}">${json_info.likes} likes</p>
                        </div>
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/material-rounded/64/000000/comments--v1.png" alt="comments icon">
                            <p class="text_font" id="comments_${json_info.id}">see ${json_info.comments} comments</p>
                        </div>
                    </div>
                    <br>
                    <div class="feed_user_comment${mode}" >
                        <div class="comment_section">
                            <img class="comment_icon_button" src="https://img.icons8.com/material-outlined/64/000000/comments--v1.png" alt="comments user icon">
                        </div>
                        <div class="comment_body">
                            <img id="comment_user_img" class="comment_user_img" src=${user_img.src} alt="Profile image of ${json_info.usr}">
                            <p class="comment_user_text_font">${getCookie("usuario")}</p>
                            <input id="comment_text_box_${json_info.id}" class="comment_text_box${mode}" type="text" placeholder="Write something" required>
                                
                        </div>
                        <button id="feed_comment_button_${json_info.id}" onclick="post_comment(${json_info.id});" class="user_comment_button${mode}">Comment</button>
                        <div class="alert" id="alert_${json_info.id}">
                            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                            <strong>This comment exceedes the 22 characters maximum length</strong>
                        </div>
                    </div>
                    <br>
                    <div class="feed_comment_section" id="feed_comment_section_${json_info.id}"></div>
                </div>
                <br>`;
    }
    else if(type === 'c'){
        return `<div class="feed_post_comment${mode}" id="feed_post_comment_${json_info.comment_id}">
                    <div class="comment_section">
                        <img class="comment_icon_button" src="https://img.icons8.com/material-rounded/64/000000/comments--v1.png" alt="comments icon">
                        <p class="text_font_date">Commented on ${json_info.date}</p>
                    </div>
                    <div class="comment_body">
                        <img class="comment_user_img" src=${json_info.img} alt="Profile image of ${json_info.usr}">
                        <p class="comment_user_text_font">${json_info.usr}</p>
                        <div class="comment_text_box${mode}">
                            <p class="text_font_margin_left">${json_info.text}</p>
                        </div>
                    </div>
                    <div class="comment_bottom">
                        <div class="icon_and_text">
                            <img onclick="like(${json_info.comment_id}, 'comment');" class="icon_button" id="like_comment_button_${json_info.comment_id}" src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="like icon">
                            <p class="text_font" id="comments_likes_${json_info.comment_id}">${json_info.likes} likes</p>
                        </div>
                    </div>
                </div>
                <br>`;
    }
    else if(type === 'r'){
        return `<div class="ranking_div">
                    <div class="user_ranking">
                        <img class="icon_ranking" src=${json_info[3]} alt="profile image of ${json_info[0]}">
                        <p class="user_ranking_text_font">${json_info[0]}</p>
                    </div>
                    <div class="img_ranking_container">
                        <img class="img_ranking" src="${json_info[2]}" alt="most recent experience of ${json_info[0]}">
                    </div>
                    <div class="likes_container">
                        <img class="icon_like_ranking" src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="like icon">
                        <p class="text_font">${json_info[1]}</p>
                    </div>
                </div>
                <br>`;
    }
    else{
        return '<div class="feed_error"><p>Error loading post or comment.</p></div>';
    }
}

/*---------------------------------footer's icons-----------------------*/

function hoverInst(element)  { element.setAttribute('src','images/Icon/instagram_icon2.png'); }
function unhoverInst(element){ element.setAttribute('src','images/Icon/instagram_icon.png' ); }
function hoverTwi(element)   { element.setAttribute('src','images/Icon/twitter_icon2.png'  ); }
function unhoverTwi(element) { element.setAttribute('src','images/Icon/twitter_icon.png'   ); }
function hoverF(element)     { element.setAttribute('src','images/Icon/question_icon2.png' ); }
function unhoverF(element)   { element.setAttribute('src','images/Icon/question_icon.png'  ); }
function hoverC(element)     { element.setAttribute('src','images/Icon/copyright_icon2.png'); }
function unhoverC(element)   { element.setAttribute('src','images/Icon/copyright_icon.png' ); }

/*-------------------------- Scroll Animation ---------------------------*/

$(window).on('load', function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight() + 1200;
        $('.feed_item').each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css('opacity') == 0) {$(this).fadeTo(500, 1);}
        } else { //object goes out of view (scrolling up)
            if ($(this).css('opacity') == 1) {$(this).fadeTo(500, 0);}
        }
        });
    }).scroll(); //invoke scroll-handler on page-load
});

