let currentplace = document.querySelector(".current-place");
let allPath = document.querySelectorAll(".map Path ");

allPath.forEach((el)=>
    el.addEventListener("mouseover",()=>
       currentplace.innerHTML = el.getAttribute("title")
    )
  
)