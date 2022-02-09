// putting all the contacts in an array to display them using li elements
const array= Array.from(document.querySelectorAll("li"));

//Making a constant for number of contacts we need on a page

const contactsPerPage = 10;

//This constant holds the number of pages needed to be generated   
const numberPages = Math.ceil(array.length / contactsPerPage);
// element to control button elements
const button  = document.querySelector(".pagination li");
//This loop give numbers to each button 
for(let i = 0; i < numberPages; i++){
    button.innerHTML += "<a href = '#' class = 'nPages'>" +(i+1) + "</a>";
}

//the loop add on click event listener to all the buttons we added
let buttons = document.querySelectorAll('.nPages');
for(let i =0; i<buttons.length;i++){
    buttons[i].addEventListener('click', pagingMain, false);
}


const listElements = document.getElementsByClassName("contact-item cf");

for(let i = contactsPerPage; i < listElements.length; i++){
    listElements[i].style.display = "none";
}


function list(){
    for(let i = 0; i < listElements.length; i++){
        listElements[i].style.display = "none";
    }
}

function pagingMain(){
   list();
    const contact = ((this.innerText - 1 )* contactsPerPage);
     for(let i = 0; i < contactsPerPage; i++){
        listElements[contact + i].style.display = "block";
    }
}