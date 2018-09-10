let aboutMe = document.querySelector('#backgroundAboutMe');

function smoothScroll() {
    window.scroll({
        top: aboutMe.offsetTop,
        left: 0,
        behavior: 'smooth'
    });

    // document.querySelector('.backgroundAboutMe').scrollIntoView({ 
    //     behavior: 'smooth' 
    //   });
}

let button = document.querySelector('#smooth-button');

button.addEventListener('click', smoothScroll);