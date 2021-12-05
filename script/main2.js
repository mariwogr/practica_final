
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
