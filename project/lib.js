/*alert("welcome to online library hosted by Rajkiya Engineering College sonbhadra");*/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function myFunction(name){
    
    x = document.getElementById(name);
    if (x.style.display === "none"){
        x.style.display = "block";

    }
    else{
        x.style.display = "none";
    }
}
