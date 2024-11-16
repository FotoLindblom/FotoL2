import { initializeGallery } from 'assets/js/loadImages.js';

const images = {'SM Lång final': ['240901-Lang_SM_final-7.jpg', '240901-Lang_SM_final-6.jpg', '240901-Lang_SM_final-5.jpg', 
    '240901-Lang_SM_final-4.jpg', '240901-Lang_SM_final-3.jpg', '240901-Lang_SM_final-2.jpg', '240901-Lang_SM_final-1.jpg']};

const filterBtnContainer = document.getElementById("filter-container");
const imageContainer = document.getElementById('image-container')

const filterBtnFunction = (span, event) => {
    let activeFilter = document.getElementById('active');
    activeFilter.removeAttribute('id');
    span.setAttribute('id', 'active')
    imageContainer.innerHTML = '';
    initializeGallery(images[event], 'media/sports'); 
}

document.addEventListener("DOMContentLoaded", () => {
    initializeGallery(images[Object.keys(images)[0]], 'media/sports')

    let flag = 0
    Object.keys(images).forEach(event => {
        const span = document.createElement("span");
        span.textContent = event;
        span.classList.add('filter')
        if (flag == 0 ) {
            span.setAttribute('id', 'active')
            flag = 1
        }

        span.addEventListener("click", () => {
            filterBtnFunction(span, event)
        });
        
        filterBtnContainer.appendChild(span);
    });
});