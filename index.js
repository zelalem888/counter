const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const back = document.querySelector('.back');
const count = document.querySelector('.count');
var x = 0;
add.addEventListener("click",function(){ 
    x++;
    count.innerHTML = x;
}
);
minus.addEventListener("click",function(){
    x--;
    count.innerHTML = x;
});
back.addEventListener("click",function(){
    x = 0;
    count.innerHTML = x;
});

