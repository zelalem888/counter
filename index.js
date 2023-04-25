const one = document.querySelector('.a1');

const minusone = document.querySelector('.a11');

const minus = document.querySelector('.minus');
const back = document.querySelector('.back');
const count = document.querySelector('.count');
const bill = document.querySelector('.bill');
const bills = document.querySelector('.bills');
var x = 0;
var y = 0;
one.addEventListener("click",() => { 

    x++;
   
    y = y + 1.6666666667;
    
    if( x >= 6){
        
        bill.innerHTML = parseInt(y);
       x = 0;
       return;
        
            
    }
    else{
        count.innerHTML = x;
    }
    
}
);


back.addEventListener("click",()=>{
    x = 0;
    y = 0;
    count.innerHTML = x;
    bill.innerHTML = y;
    var audio = new Audio("audio.mp3");
    audio.play();
});


