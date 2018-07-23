var home = document.getElementById("home");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var title = document.getElementById("title");
var homecontent = document.getElementById("homecontent");
var aboutcontent = document.getElementById("aboutcontent");
var contactcontent = document.getElementById("contactcontent");
var body = document.querySelector("body");

    
    callFunctions();
    home.classList.add("active");
    homecontent.style.zIndex = 100;
    homecontent.style.visibility = "visible";
    homecontent.classList.remove("fade");

home.addEventListener("click",function(){
    
    callFunctions();
    home.classList.add("active");
    homecontent.style.zIndex = 100;
    homecontent.style.visibility = "visible";
    homecontent.classList.remove("fade");
  
    
})

title.addEventListener("click",function(){
   
    callFunctions();
    home.classList.add("active");
    homecontent.style.zIndex = 100;
    homecontent.style.visibility = "visible";
    homecontent.classList.remove("fade");
    
})

about.addEventListener("click",function(){
   
    callFunctions();
    about.classList.add("active");
    aboutcontent.style.zIndex = 100;
    aboutcontent.style.visibility = "visible";
    aboutcontent.classList.remove("fade");
 
    
})
contact.addEventListener("click",function(){

    callFunctions();
    contact.classList.add("active");
    contactcontent.style.zIndex = 100;
    contactcontent.style.visibility = "visible";
    contactcontent.classList.remove("fade");
    
})




function removeClass(){
    
    
    home.classList.remove("active");
    about.classList.remove("active");
    contact.classList.remove("active");
    title.classList.remove("active");
    
}

function hideContents(){
    
    contactcontent.style.zIndex = -100;
    aboutcontent.style.zIndex = -100;
       homecontent.style.zIndex = -100;
    
}

function addFade(){
    
      contactcontent.classList.add("fade")
    aboutcontent.classList.add("fade")
    homecontent.classList.add("fade")
    
}

function goneContents(){
    
    contactcontent.style.visibility = "hidden";
    aboutcontent.style.display = "hidden";
    homecontent.style.display = "hidden";
    
}

function callFunctions(){
       
    addFade();
    hideContents()
    removeClass();
    goneContents();
    
    
}