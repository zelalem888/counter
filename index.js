
var y = 0;
var x = 0;

var anytime = document.querySelector('.count');
var anyone = document.querySelector('.bills');


const back = document.querySelector('.start').addEventListener("click",()=>{

var countup = setInterval(function(){
  if (x >= 6) {
    
    y = y + 10;
    anyone.innerHTML = y;
    alert('your final bill is $ ' + y);
    clearInterval(countup);
     x = 0;
  }

    anytime.innerHTML = x;

 
  x++;


}, 1000);
return;

});

const bill = document.querySelector('.bill').addEventListener("click",()=>{

    alert('your final bill is $ ' + y);

})



// const front = document.querySelector('.bill').addEventListener("click",()=>{

//     alert('your final is $ ' + y);
//     anyone.innerHTML = 0;
//     anytime.innerHTML = 0;

// });


































// back.addEventListener("click",()=>{
//     x = 0;
//     y = 0;
//     count.innerHTML = x;
//     bill.innerHTML = y;
//     var audio = new Audio("audio.mp3");
//     audio.play();
// });


