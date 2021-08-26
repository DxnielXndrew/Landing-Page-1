
let topLink1 = document.querySelector(".top-navlink-1");
let topLink2 = document.querySelector(".top-navlink-2");
let topLink3 = document.querySelector(".top-navlink-3");

const navbarNav = document.querySelector(".navbar-nav");
const navbarNav2 = document.querySelector(".navbar-right");


const hamburgerDiv = document.querySelector(".hamburger-div");
const hamburgerIcon = document.querySelector(".img1");
const closeIcon = document.querySelector(".img2");


if (hamburgerIcon.style.display === 'block') {
    navbarNav.style.display='none';
    navbarNav2.style.display='none';
}


hamburgerDiv.addEventListener("click", function() {
    if (hamburgerIcon.style.display === 'none') {
        closeIcon.style.display='none';
        hamburgerIcon.style.display='block'
        navbarNav.style.display='none';
        navbarNav2.style.display='none';
    } else {
        hamburgerIcon.style.display='none';
        closeIcon.style.display='block';
        navbarNav.style.display='block';
        navbarNav2.style.display='block';
    }
});
















topLink1.addEventListener("click", () => {
    if (topLink1 == document.activeElement) {
        topLink1.blur();
    } else {
        topLink1.focus();
    };
})
topLink2.addEventListener("click", () => {
    if (topLink2 == document.activeElement) {
        topLink2.blur();
    } else {
        topLink2.focus();
    };
})
topLink3.addEventListener("click", () => {
    if (topLink3 == document.activeElement) {
        topLink3.blur();
    } else {
        topLink3.focus();
    };
})