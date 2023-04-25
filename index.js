const one = document.querySelector('.a1');
const two = document.querySelector('.a2');
const three = document.querySelector('.a3');
const four = document.querySelector('.a4');
const five = document.querySelector('.a5');
const minusone = document.querySelector('.a11');
const minustwo = document.querySelector('.a22');
const minusthree = document.querySelector('.a33');
const minusfour  = document.querySelector('.a44');
const minusfive = document.querySelector('.a55');
const minus = document.querySelector('.minus');
const back = document.querySelector('.back');
const count = document.querySelector('.count');
var x = 0;
one.addEventListener("click",() => { 
    x++;
    count.innerHTML = x;
}
);
two.addEventListener("click",() => { 
    x = x + 2;

    count.innerHTML = x ;
}
);
three.addEventListener("click",() => { 
    x = x + 3;

    count.innerHTML = x ;
}
);
four.addEventListener("click",() => { 
    x = x + 4;

    count.innerHTML = x ;
}
);
five.addEventListener("click",() => { 
   alert('your free trial is over, buy full version for more clicks');
   x = 0;
    count.innerHTML = x;
}
);
minusone.addEventListener("click",()=>{
    x--;
    count.innerHTML = x;
});
minustwo.addEventListener("click",()=>{
    x = x - 2;
    count.innerHTML = x;
});
minusthree.addEventListener("click",()=>{
    x = x - 3;
    count.innerHTML = x;
});
minusfour.addEventListener("click",()=>{
    x = x -4 ;
    count.innerHTML = x;
});
minusfive.addEventListener("click",()=>{
    alert('your free trial is over, buy full version for more clicks');
    x = 0;
    count.innerHTML = x;
});
back.addEventListener("click",()=>{
    x = 0;
    count.innerHTML = x;
    var audio = new Audio("audio.mp3");
    audio.play();
});

