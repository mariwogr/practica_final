
function searchElem(){
    /*
        Searches an element in the page by obtaining the words from
        the input box
    */
    //filter: search words; figures: array of web experiences
    //hidden: counter of hidden figures
    var filter, figures, hidden;

    filter = $('input_search').value.toUpperCase().split(' ');

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
