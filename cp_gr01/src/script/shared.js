/* Dark Mode */

function darkMode(check) {
    /* This function will set up every element to dark when the user changes to the dark mode */
    var body = document.body;
    body.classList.toggle("body_dark_mode");

    const time = new Date();
    time.setTime(time.getTime() + (365 * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();

    var change_mode = check;

    // Changes the mode in the cookie every time it changes to the dark mode
    if(getCookie("mode")=="light-mode"){
        document.cookie = "mode=" + "dark-mode" + ";" + expires + ";path=/";
        change_mode = true;
    }
    if(getCookie("mode")=="dark-mode" && !change_mode){
        document.cookie = "mode=" + "light-mode" + ";" + expires + ";path=/";
    } 


    //------------------ It saves every element of the classes that are going to be changed to the dark mode --------------------

    var feed_div = document.getElementsByClassName("feed_centered");

    for (var i=0; i <feed_div.length; i++){
        feed_div[i].classList.toggle("feed_dark_mode");
    }
    
    var feed_user_comment = document.getElementsByClassName("feed_user_comment");

    for (var i=0; i <feed_user_comment.length; i++){
        feed_user_comment[i].classList.toggle("feed_user_comment_dark_mode");
    }

    var comment_text_box = document.getElementsByClassName("comment_text_box");

    for (var i=0; i <comment_text_box.length; i++){
        comment_text_box[i].classList.toggle("comment_text_box_dark_mode");
    }

    var feed_post_comment = document.getElementsByClassName("feed_post_comment");

    for (var i=0; i <feed_post_comment.length; i++){
        feed_post_comment[i].classList.toggle("feed_post_comment_dark_mode");
    }

    var title_text_anim= document.getElementsByClassName("title_text_anim");

    for (var i=0; i <title_text_anim.length; i++){
        title_text_anim[i].classList.toggle("title_text_anim_dark_mode");
    }

    var title_text_font = document.getElementsByClassName("title_text_font");

    for (var i=0; i <title_text_font.length; i++){
        title_text_font[i].classList.toggle("title_text_font_dark_mode");
    }

    var title_text_font_nomargin = document.getElementsByClassName("title_text_font_nomargin");

    for (var i=0; i <title_text_font_nomargin.length; i++){
        title_text_font_nomargin[i].classList.toggle("title_text_font_nomargin_dark_mode");
    }
    
    var user_comment_button = document.getElementsByClassName("user_comment_button");

    for (var i=0; i <user_comment_button.length; i++){
        user_comment_button[i].classList.toggle("user_comment_button_dark_mode");
    }

    var browse_more_button2 = document.getElementsByClassName("browse_more_button2");

    for (var i=0; i <browse_more_button2.length; i++){
        browse_more_button2[i].classList.toggle("browse_more_button2_dark_mode");
    }

    var nav = document.getElementsByClassName("nav");

    for (var i=0; i <nav.length; i++){
        nav[i].classList.toggle("nav_dark_mode");
    }

    var footer = document.getElementsByClassName("footer");

    for (var i=0; i <footer.length; i++){
        footer[i].classList.toggle("footer_dark_mode");
    }

    var nav_links = document.getElementsByClassName("nav_links");

    for (var i=0; i <nav_links.length; i++){
        nav_links[i].classList.toggle("nav_links_dark_mode");
    }

    var name_user = document.getElementsByClassName("name_user");

    for (var i=0; i <name_user.length; i++){
        name_user[i].classList.toggle("name_user_dark_mode");
    }

    var ranking_experiences = document.getElementsByClassName("ranking_experiences");

    for (var i=0; i <ranking_experiences.length; i++){
        ranking_experiences[i].classList.toggle("ranking_experiences_dark_mode");
    }

    var button2 = document.getElementsByClassName("button2");

    for (var i=0; i <button2.length; i++){
        button2[i].classList.toggle("button2_dark_mode");
    }

    var dropbtn = document.getElementsByClassName("dropbtn");

    for (var i=0; i <dropbtn.length; i++){
        dropbtn[i].classList.toggle("dropbtn_dark_mode");
    }

    var button_settings = document.getElementsByClassName("button_settings");

    for (var i=0; i <button_settings.length; i++){
        button_settings[i].classList.toggle("button_settings_dark_mode");
    }

    var subtitle_text_font = document.getElementsByClassName("subtitle_text_font");

    for (var i=0; i <subtitle_text_font.length; i++){
        subtitle_text_font[i].classList.toggle("subtitle_text_font_dark_mode");
    }

}

function checkDarkMode(){
    // This function will check if the dark mode is on or off
    if(getCookie("mode")=="dark-mode"){
        darkMode(true);
    }
    else{
        return;
    }
}

function getCookie(cname){
    // Returns a specific cookie passed as parameter
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

function preview2(){
    // Preview img used on Change Form
    var img = document.getElementById("Change_form").elements['im_per'].value;
    document.getElementById("ImgPreV2").src = img;
    document.getElementById("ImgPreV2").style.display = "block";
    document.getElementById("ImgPreV2").style.visibility = "visible";
}

function preview3(){
    // Preview img used on Change Form
    var img = document.getElementById("sign_up_form").elements['im_per'].value;
    document.getElementById("ImgPreV2").src = img;
    document.getElementById("ImgPreV2").style.display = "block";
    document.getElementById("ImgPreV2").style.visibility = "visible";
}

function preview4(){
    // Preview img used on Change Form
    var img = document.getElementById("experience_form").elements['new_experience'].value;
    document.getElementById("ImgPreV3").src = img;
    document.getElementById("ImgPreV3").style.display = "block";
    document.getElementById("ImgPreV3").style.visibility = "visible";
}