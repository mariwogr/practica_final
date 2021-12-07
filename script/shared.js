/* Dark Mode */

function darkMode() {
    var body = document.body;
    body.classList.toggle("body_dark_mode");

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

    var fade_in_text = document.getElementsByClassName("fade_in_text");

    for (var i=0; i <fade_in_text.length; i++){
        fade_in_text[i].classList.toggle("fade_in_text_dark_mode");
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

}