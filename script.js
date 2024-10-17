let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};




const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;
let autoSlideInterval;

document.querySelector('.left-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideCount - 1;
    }
    updateSlidePosition();
    resetAutoSlide(); 
});

document.querySelector('.right-btn').addEventListener('click', () => {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlidePosition();
    resetAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlidePosition();
        resetAutoSlide(); 
    });
});

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000); 
}

autoSlideInterval = setInterval(autoSlide, 3000);

slides.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

slides.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(autoSlide, 3000);
});



