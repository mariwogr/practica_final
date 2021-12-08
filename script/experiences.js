

function searchElem(){
    /*
        Searches an element in the page by obtaining the words from
        the input box
    */
    //filter: search words; figures: array of web experiences
    //hidden: counter of hidden figures

    var filter, figures, hidden;
    
    filter = document.getElementById("input_search").value.toUpperCase();


    //get experience figure tags and set hidden variable at its possible maximum

    figures = document.getElementsByClassName("exp_user_div");

    hidden = figures.length;


    //in case no words are provided, show all experiences
    if (filter.length == 0){
        for(let i = 0; i < figures.length; i++){
            figures[i].style.display = "";
        }
        return;
    }


    //iterate through experiences and hide or show them according to whether they match filter
    for(let i = 0; i < figures.length; i++){
        
        if(!figures[i].innerHTML.toUpperCase().includes(filter)){
            figures[i].style.display = "none";
            hidden--;
        }
        else{
            figures[i].style.display = "";
        }
    }
    
    //inform the user if none of the experiences matches his query
    if (hidden == 0){
        alert("Ningun elemento satisface su busqueda");
    }
}

function set_up(){
    load_exps();
    checkCookie();
}

//------------------[Dropdown Function]------------------
function myFunction(){
    // Show dropdown
    document.getElementById("myDropdown").classList.toggle("show");
    //alert("ola");
}

window.onclick = function(event){
    // Checks if dropdown is clicked
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown_content");
        var i;
        //alert("asdios");
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}

function preview2(){
    // Preview img used on Change Form
    var img = document.getElementById("Change_form").elements['im_per'].value;
    document.getElementById("ImgPreV2").src = img;
    document.getElementById("ImgPreV2").style.display = "block";
    document.getElementById("ImgPreV2").style.visibility = "visible";

}

function preview3(){
    // Preview img used on Add Experience Form
    var img = document.getElementById("experience_form").elements['new_experience'].value;
    document.getElementById("ImgPreV3").src = img;
    document.getElementById("ImgPreV3").style.display = "block";
    document.getElementById("ImgPreV3").style.visibility = "visible";

}

function setTextUser(){
    var user = getCookie("usuario");
    var email = getCookie("email");
    var img = getCookie("imagen");
    document.getElementById("usern").innerText = user;
    document.getElementById("email").innerText = email;  
    if(img!=""){
        document.getElementById("img").src = img;
    }
}

function logOut(){
    // Funtion to log out of the session
    const time = new Date();
    time.setTime(time.getTime() + (365 * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();

    document.cookie = "usuario="  + ";" + expires + ";path=/";
    document.cookie = "pwd="  + ";" + expires + ";path=/";
    document.cookie = "email="  + ";" + expires + ";path=/";
    document.cookie = "imagen=" + ";" + expires + ";path=/";

    window.location.href = "main.html";
}

function changeData(expdays){
    const time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();

    var user = document.getElementById("Change_form").elements["username"].value;
    if(user != ""){
        document.cookie = "usuario=" + user + ";" + expires + ";path=/";
    }
    

    var img = document.getElementById("Change_form").elements["im_per"].value;
    if(img != ""){
        document.cookie = "imagen=" + img + ";" + expires + ";path=/";
    }
    window.location.href = "#";
}


function load_exps(){
    let user = getCookie("usuario");
    let user_exps = [];

    let feed = JSON.parse(localStorage.getItem("feed"));

    for (let i = 0; i < feed.length; i++) {
        if (feed[i]["usr"] == user){
            user_exps.push(feed[i]);
        }
    }
    for (let i = 0; i < user_exps.length; i++) {
        $('#div_exp').append(convert_to_html_exp(user_exps[i], i));
    }

}

function convert_to_html_exp(json_info, id){
    return `<div id="imageNo${id}" class="exp_user_div">
                <div>
                    <img class="img_experience" src="${json_info.src}">
                </div>
                <div class="description_container">
                    <div class="description_div">
                        <p class="text_font">${json_info.descr}</p>
                    </div>
                    <div class="trash_div">
                        <a href="#popupdel_${id}">
                            <img class="img_delete" src="https://img.icons8.com/ios-glyphs/60/000000/trash--v3.png">
                        </a>
                    </div>
                </div>
            </div>
            <!----------------------------------POP UP DELETE EXP---------------------->
            <div id="popupdel_${id}" class="overlay">
                <div id="popupBody">
                    <h2 class="title_text_font_nomargin"> Delete Experiences</h2>
                    <a id="cerrar" href="#">&times;</a>
                    <div class="popupContent">
                        <br><br>
                        <h4 class="text_font">Are you sure to delete the experience: </h4>
                        <br><br>
                        <button class="button_popups" onclick = "delete_exp(${id},${json_info.id})">YES</button>
                    </div>
                </div>
            </div>`;
}

function delete_exp(id, feed_id) {

    $(`#imageNo${id}`).css('display', "none");

    var feed = JSON.parse(localStorage.getItem("feed"));

    var new_feed = [];

    for (let i = 0; i < feed.length; i++) {
        if (feed[i]["id"] != feed_id){
            new_feed.push(feed[i]);
        }
    }
    localStorage.setItem("feed", JSON.stringify(new_feed));

    //set_up();
    window.location.href = "experiences.html";
}

function add_experience(){

    var time = new Date();
    time.setTime(time.getTime());

    let descr = $('#experience_description')[0].value;
    let img = $('#new_experience')[0].value;

    let feed = JSON.parse(localStorage.getItem("feed"));
    let id_post = feed[feed.length - 1]["id"];
    
    let dict = {
                    id: id_post + 1,
                    src: img,
                    usr: getCookie("usuario"),
                    descr: descr,
                    date: time.toUTCString(),
                    likes: 0,
                    img : getCookie("imagen"),
                    comments: 0,
                    who_liked: []
                }

    saveLocal("feed", dict);
    $('.div_exp').append(convert_to_html_exp(dict));

    window.location.href = "#";
}

//------------------[LocalStorage Functions]------------------

function saveLocal(where, data){
    if (!localStorage.getItem(where)){
        localStorage.setItem(where, "[]");
    }
    let user_data = JSON.parse(localStorage.getItem(where));

    user_data.push((data));

    localStorage.setItem(where, JSON.stringify(user_data));
}

//------------------[CheckCookie Functions]------------------

function checkCookie(){
    var cookie = document.cookie;
    if(getCookie("usuario")=="" && getCookie("email")=="" && getCookie("pwd")==""){
        window.location.href="signin.html";
        alert("You have to be logged");
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
//------------------[Drag and drop experiences]------------------

$(function() {
    // Permite el drag and drop entre imagenes que busca por su id
    $("#div_exp").sortable({ 
            update: function(event, ui) {
            getIdsOfImages();
        }   		
    });
});

function getIdsOfImages() {
    // Devuelve el id de cada imagen contenida en div_exp
    var values = [];
    $('.exp_user_div').each(function (index) {
        values.push( $(this).attr("id").replace("imageNo", "") );
    });
}


/*---------------------------------Footer's icons-----------------------*/

function hoverInst(element){
    element.setAttribute("src","images/Icon/instagram_icon2.png");
}
function unhoverInst(element){
    element.setAttribute("src","images/Icon/instagram_icon.png");
}
function hoverTwi(element){
    element.setAttribute("src","images/Icon/twitter_icon2.png");
}
function unhoverTwi(element){
    element.setAttribute("src","images/Icon/twitter_icon.png");
}
function hoverF(element){
    element.setAttribute("src","images/Icon/question_icon2.png");
}
function unhoverF(element){
    element.setAttribute("src","images/Icon/question_icon.png");
}
function hoverC(element){
    element.setAttribute("src","images/Icon/copyright_icon2.png");
}
function unhoverC(element){
    element.setAttribute("src","images/Icon/copyright_icon.png");
}