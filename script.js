score=0;
cross=true;
audio = new Audio('music/gana.mp3');
audiogo=new Audio('music/d.wav');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function(e){
    console.log("Key code is:" , e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino')
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        }, 700);
    }

    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left=dinoX+112+"px";
    }

    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left=(dinoX-112)+"px";
    }
}

setInterval(()=>{
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle= document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));  //it will give the computed left value of dino
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));  
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    // console.log(offsetX, offsetY)
    if(offsetX<93 && offsetY<52){
        gameOver.innerHTML="Game Over";
        obstacle.classList.remove('obstacleAn');
        audiogo.play();
        setTimeout(() => {
            audiogo.play();
        audio.pause();
        }, 1000);
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;

        setTimeout(()=>{
            cross=true;
        },700);
    }

    setTimeout(()=>{
    aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
    newDur=aniDur-0.01;
    obstacle.style.animationDuration=newDur+'s';
    },1900);
},100)


function updateScore(score){
    scoreCont.innerHTML="Your Score: "+score;
}
