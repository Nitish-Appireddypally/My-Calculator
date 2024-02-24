let d=document.getElementById('display');

function clearDisplay(){
    d.value='';
}

function addToDisplay(val){
    if(val==='!')
    {
        d.value=d.value*-1;
    }
    else
    {
       d.value=d.value+val
    }
}
function calculate(){
    d.value=eval(d.value);
}
function handleKeyPress(e){
    console.log(e)
    if (/^\d$/.test(e.key) || ['C','-', '+', '*', '/', '%','1','2','3','4','5','6','7','8','9','0','.'].includes(e.key)){
        addToDisplay(e.key)
    }
    if(e.key==='='||e.key=='Enter')
    {
        calculate();
    }
    if(e.key=='Backspace'){
        clearDisplay();
    }
}

let b=document.getElementsByClassName("btn");
for(var button of b){
    document.addEventListener('keydown',handleKeyPress);    
}



