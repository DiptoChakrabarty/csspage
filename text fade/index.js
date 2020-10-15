function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().height;
    //getBoundingClientRect()--returns the position ie. height,width,top,bottom,etc.
    var screenPosition = window.innerHeight/2;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear'); 
    }
    console.log(introPosition)
}

window.addEventListener('scroll',scrollAppear);