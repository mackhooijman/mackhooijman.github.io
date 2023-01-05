const toggleButton = document.getElementsByClassName('toggle-button')[0]
const mobileNav = document.getElementsByClassName('mobile-nav')[0]
const hamburgerBar0 = document.getElementsByClassName('bar0')[0]
const hamburgerBar1 = document.getElementsByClassName('bar1')[0]
const hamburgerBar2 = document.getElementsByClassName('bar2')[0]
const firstSectionBlur = document.getElementsByClassName('first_section')[0]
const secondSectionBlur = document.getElementsByClassName('second_section')[0]
const thirdSectionBlur = document.getElementsByClassName('third_section')[0]
const footerBlur = document.getElementsByClassName('footer')[0]


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}


toggleButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
    hamburgerBar0.classList.toggle('active')
    hamburgerBar1.classList.toggle('active')
    hamburgerBar2.classList.toggle('active')
    firstSectionBlur.classList.toggle('active')
    secondSectionBlur.classList.toggle('active')
    thirdSectionBlur.classList.toggle('active')
    footerBlur.classList.toggle('active')
})




