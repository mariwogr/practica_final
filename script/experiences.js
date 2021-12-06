
function searchElem(){
    /*
        Searches an element in the page by obtaining the words from
        the input box
    */
    //filter: search words; figures: array of web experiences
    //hidden: counter of hidden figures
    var filter, figures, hidden;
    
    console.log($('#input_search'));
    filter = $('#input_search').value.toUpperCase().split(' ');

    //get experience figure tags and set hidden variable at its possible maximum
    figures = $('.div_exp');
    hidden = figures.length;

    //in case no words are provided, show all experiences
    if (filter.length == 0){
        for(let i = 0; i < figures.length; i++){
            figures[i].css('display', '');
        }
        return;
    }

    //iterate through experiences and hide or show them according to whether they match filter
    for(let i = 0; i < figures.length; i++){
        for(let j = 0; j < filter.length; j++){
            if( figures[i].innerHTML.toUpperCase().includes(filter[j]) ){
                //show it
                figures[i].css('display', '');
                hidden--;
            } else{
                //hide it
                figures[i].css('display', 'none');
            }
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




window.onclick = function(event){
    // Checks if dropdown is clicked

    if (event.target.matches('.dropbtn')) {
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
        console.log(user_exps[i]);
        $('.div_exp').append(convert_to_html(user_exps[i]));
    }

}

function convert_to_html(json_info){
    return `<div class="exp_user_div">
                <div class="img_ranking_container">
                    <img class="img_ranking" src="${json_info.src}">
                </div>
                <div class="descr_img">
                    <p class="text_font">${json_info.descr}</p>
                </div>
            </div>
            <br>`;
}

function new_experience(img, descr){

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


