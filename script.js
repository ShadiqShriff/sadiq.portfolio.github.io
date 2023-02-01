// for mobile resulation or humberger icons start here
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');

}
// for mobile resulation or humberger icons end here

// For header text menu Animation Start

$(document).ready(function(){

    var typed = new Typed(".typing-1",{
        strings:[
            "Graphic Designer","Team Lead", "HR Consultant","Relationship Manager",
            "Freelancer"
        ],
        typeSpeed: 90,
        backSpeed: 60,
        loop: 1
    });
});

// For header text menu Animation End



// About Section Onclick effect  Start


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

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

// About Section Onclick effect  End


// For Scrolling Up and Down

let calcScrollValue = () =>{
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value")
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100)/calcHeight);

        if(pos>100){
            scrollProgress.style.display = "grid";
        }
        else{
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#770737 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;


}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue