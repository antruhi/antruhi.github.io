body = document.getElementsByTagName('body')[0];

function lockScroll(){
    body.style.overflow = 'hidden';
    scrollUnlockCaption.style.visibility = 'visible'; 
    // scrollUnlockCaption.innerText = 'Unlock page scroll by clicking here';
}

function unlockScroll(){
    body.style.overflow = 'auto';
    scrollUnlockCaption.style.visibility = 'hidden';
    // scrollUnlockCaption.innerText = '';
}