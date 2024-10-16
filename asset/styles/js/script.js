/************************ start sidebar ************************/
document.addEventListener('DOMContentLoaded', function() {
    const sidebarDiv = document.getElementById('sidebar-div');
    const menusIcons = document.querySelectorAll('.menus-icon');

    const toggleSidebar = () => {
        sidebarDiv.classList.toggle('sidebar-div-active');
        document.querySelector('.main').classList.toggle('main-div-active');
    };

    menusIcons.forEach(icon => {
        icon.addEventListener('click', toggleSidebar);
    });

    document.addEventListener('click', function(event) {
        if (sidebarDiv.classList.contains('sidebar-div-active') && 
            !sidebarDiv.contains(event.target) && 
            !Array.from(menusIcons).some(icon => icon.contains(event.target))) {
            sidebarDiv.classList.remove('sidebar-div-active');
            document.querySelector('.main').classList.remove('main-div-active');
        }
    });
});
/************************ end sidebar ************************/
/************************ start slider app card ************************/
function mvraps() {
    const container = document.querySelector('.app-slider');
    container.scrollBy({
        left: 280, 
        behavior: 'smooth'
    });
}

function mvlaps() {
    const container = document.querySelector('.app-slider');
    container.scrollBy({
        left: -280,
        behavior: 'smooth'
    });
}

/************************ end slider app card ************************/

/************************ start slider video ************************/
function moveRight() {
    const container = document.querySelector('.video-slider'); 
    container.scrollBy({
        left: 200, 
        behavior: 'smooth'
    });
}

function moveLeft() {
    const container = document.querySelector('.video-slider');
    container.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

/************************ end slider video ************************/
/************r-************ start result animation ************************/
function animateElement(element) {
    var tl = gsap.timeline();

    tl.from(element, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 1,
        behavior: 'smooth'
    });

}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateElement(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
});

const elementsToAnimate = document.querySelectorAll('.result-dev, .apps-slider-main-div, .video-slider-main-dev, .result-maps-div');
elementsToAnimate.forEach(element => observer.observe(element));

/************************ end result animation ************************/