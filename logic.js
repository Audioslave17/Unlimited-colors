const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalId;
const startCahngingColor = function(){
    const bgcolor = function(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId)
    {
        intervalId = setInterval(bgcolor,1000);
    }
}
document.querySelector('#start').addEventListener('click',startCahngingColor);

const stopChnagingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#stop').addEventListener('click',stopChnagingColor);