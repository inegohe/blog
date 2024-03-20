//function called when an image in the page is clicked
function modal(){
    document.getElementById("modal-content").setAttribute("src",event.srcElement.src);
    console.log(event.srcElement.src);
    document.getElementById("modalBg").style.display = "block";
}

let modalBg = document.getElementById("modalBg");
// close the modal when you click anywher in the document
modalBg.addEventListener("click",()=>document.getElementById("modalBg").style.display = "none")