var home = document.getElementById("home");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var title = document.getElementById("title");
var homecontent = document.getElementById("homecontent");
var aboutcontent = document.getElementById("aboutcontent");
var contactcontent = document.getElementById("contactcontent");

    addFade();
    goneContents();
    removeClass();
    home.classList.add("active");
    homecontent.style.display = "block";
    homecontent.classList.remove("fade");
 
home.addEventListener("click",function(){
    
    addFade();
    goneContents();
    removeClass();
    home.classList.add("active");
    homecontent.style.display = "block";
    homecontent.classList.remove("fade");
    
})

title.addEventListener("click",function(){
    addFade();
    goneContents();
    removeClass();
    home.classList.add("active");
    homecontent.style.display = "block";
    homecontent.classList.remove("fade");
    
})

about.addEventListener("click",function(){
     addFade();
     hideContents();
    removeClass();
    about.classList.add("active");
    aboutcontent.style.display = "block";
    aboutcontent.classList.remove("fade");
    
})
contact.addEventListener("click",function(){
     addFade();
     hideContents();
    removeClass();
    contact.classList.add("active");
    contactcontent.style.display = "block";
    contactcontent.classList.remove("fade");
    
})




function removeClass(){
    
    
    home.classList.remove("active");
    about.classList.remove("active");
    contact.classList.remove("active");
    title.classList.remove("active");
    
}

function hideContents(){
    
    contactcontent.style.display = "inline";
    aboutcontent.style.display = "inline";
    homecontent.style.display = "inline";
    
}

function addFade(){
    
      contactcontent.classList.add("fade")
    aboutcontent.classList.add("fade")
    homecontent.classList.add("fade")
    
}

function goneContents(){
    
     contactcontent.style.display = "none";
    aboutcontent.style.display = "none";
    homecontent.style.display = "none";
    
}