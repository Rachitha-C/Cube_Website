const toggleBtn = document.querySelector(".toggle_btn");
const mobileMenu = document.getElementById("mobileMenu");
    toggleBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });

const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

const image = [
    '../Images/cottonbro.png',
    '../Images/cottonbro.png',
    '../Images/cottonbro.png',
    '../Images/cottonbro.png'
];
let current = 0;
const mainImage = document.getElementById("mainImage");
function setImage(src) {
    mainImage.src = src;
}
function prevSlide() {
    current = (current - 1 + image.length) % image.length;
    mainImage.src = image[current];
}
function nextSlide() {
    current = (current + 1) % image.length;
    mainImage.src = image[current];
}

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");
const dots = document.querySelectorAll(".indicator");
let index = 0;
function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 20;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
}
nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
});
prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});

function toggleAccordion(header) {
    const accordion = header.parentElement;
    const allAccordions = document.querySelectorAll('.accordion');
    allAccordions.forEach(acc => {
        if (acc !== accordion) {
            acc.classList.remove('active');
            acc.querySelector('.accordion-icon').textContent = '+';
            }
        });
        accordion.classList.toggle('active');
        header.querySelector('.accordion-icon').textContent = accordion.classList.contains('active') ? '−' : '+';
    }
                