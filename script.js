var home = document.getElementById("home");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var title = document.getElementById("title");

 

home.addEventListener("click",function(){
    
    removeClass();
    home.classList.add("active");
 
    
    
})

title.addEventListener("click",function(){
    
    removeClass();
    home.classList.add("active");
 
    
    
})

about.addEventListener("click",function(){
    
    removeClass();
    about.classList.add("active");
 
    
    
})
contact.addEventListener("click",function(){
    
    removeClass();
    contact.classList.add("active");
 
    
    
})




function removeClass(){
    
    
    home.classList.remove("active");
    about.classList.remove("active");
    contact.classList.remove("active");
    title.classList.remove("active");
    
}