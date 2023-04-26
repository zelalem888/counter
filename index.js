
var y = 0;
var x = 0;

var anytime = document.querySelector('.count');
var anyone = document.querySelector('.bills');


const back = document.querySelector('.start').addEventListener("click",()=>{
    
    x = x + 5;
    y = y + 10;
    anytime.innerHTML = x; 
    anyone.innerHTML = y;
    return;

    
});

const front = document.querySelector('.bill').addEventListener("click",()=>{

    alert('your final is $ ' + y);
    anyone.innerHTML = 0;
    anytime.innerHTML = 0;

});


































// back.addEventListener("click",()=>{
//     x = 0;
//     y = 0;
//     count.innerHTML = x;
//     bill.innerHTML = y;
//     var audio = new Audio("audio.mp3");
//     audio.play();
// });


