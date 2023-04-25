const one = document.querySelector('.a1');

const minusone = document.querySelector('.a11');

const minus = document.querySelector('.minus');
const back = document.querySelector('.back');
const count = document.querySelector('.count');
var x = 0;
one.addEventListener("click",() => { 

    x++;
    
    if( x >= 6){
        alert("your free trial is over, buy full version for more clicks");
        
    }
    else{
        count.innerHTML = x;
    }
    
}
);

minus.addEventListener("click",()=>{
    x--;
    if(x <= -6){
        alert("your free trial is over, buy full version for more clicks")
    }
    else{
        count.innerHTML = x;
    }
});
back.addEventListener("click",()=>{
    x = 0;
    count.innerHTML = x;
    var audio = new Audio("audio.mp3");
    audio.play();
});

