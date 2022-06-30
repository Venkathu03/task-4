function startad() {
    setTimeout(function(){
        document.getElementById('bg-img').style.transform = 'translatex(-155px)';
        document.getElementById('bg-img').style.transition = 'all 7.5s';
    },300)
    
    setTimeout(function(){
        document.getElementById('box1').style.top = '-201px';
        document.getElementById('box1').style.transition = 'all 0.5s';
        document.getElementById('box2').style.bottom = '-187px';
        document.getElementById('box2').style.transition = 'all 0.5s';
    },300)
    
    setTimeout(function(){
        document.getElementById('text1').classList.add('move');
    },500)
    setTimeout(function(){
        document.getElementById('text2').classList.add('move');
    },600)

    setTimeout(function(){
        document.getElementById('text3').style.opacity = 1;
        document.getElementById('text3').style.transition = 'all 0.8s';
        document.getElementById('text4').style.opacity = 1;
        document.getElementById('text4').style.transition = 'all 1s';
    },1000)

    setTimeout(function(){
        // document.getElementById('btn').style.opacity = 1;
        document.getElementById('btn').style.width = '112px';
        document.getElementById('btn').style.transition = '0.6s';
        document.getElementById('read').style.opacity = 1;
        document.getElementById('read').style.fontSize = '14px';
        document.getElementById('read').style.transition = '0.7s';
    },1350)

    setTimeout(function(){
        document.getElementById('link').style.transform = 'translatey(-7px)';
        document.getElementById('link').style.opacity = 1;
        document.getElementById('link').style.transition = 'all 0.6s'
    },1700)

    setTimeout(function(){
        document.getElementById('logo').style.transform = 'translatey(10px)'
        document.getElementById('logo').style.transition = 'all 0.3s'
    },2000)

    
}
window.load = startad();