let button=document.getElementById('btn');
button.addEventListener('click',()=>{
let string="0123456789ABCDEF";
let colors="#";
for(let index=0;index<6;index++){
    colors+=string[Math.floor(Math.random()*6)];
}
document.body.style.backgroundColor=colors;
});
