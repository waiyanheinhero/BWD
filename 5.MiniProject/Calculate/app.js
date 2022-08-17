
let keypard = document.querySelector(".keypard");
let display = document.querySelector(".display");
let operator = ["+","-","*","/","%"];
let lastchar = display.innerHTML[display.innerHTML.length-1]


let filter = (i)=>{

    if(display.innerHTML.length >= 10){
        return false
    };
    
    if(display.innerHTML == "0" && i != "." ){
      
            clearAll();
    }    

        if(operator.includes(i) && operator.includes(lastchar)){
                return false;
        }
   
    return true
};

let show = (i)=> {
    if(filter(i)){
        display.innerText += i;
    }
};


let calc = ()=> {
    if(!operator.includes(display.innerHTML[display.innerHTML.length-1])){
        display.innerHTML = eval(display.innerHTML)
    }else{
        clearOne(operator.includes(lastchar))
    }
}



let clearAll = ()=> display.innerHTML = "";

let clearOne = ()=> display.innerHTML = display.innerHTML.substring(0,display.innerHTML.length-1);