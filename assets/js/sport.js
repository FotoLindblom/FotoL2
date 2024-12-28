import { initializeGallery } from '../../assets/js/loadImages.js';

const images = {
    'Helg utan älg': ['241019-Helg_utan_alg-8.jpg', '241019-Helg_utan_alg-7.jpg', '241019-Helg_utan_alg-6.jpg', '241019-Helg_utan_alg-5.jpg', '241019-Helg_utan_alg-4.jpg', '241019-Helg_utan_alg-3.jpg', '241019-Helg_utan_alg-2.jpg', '241019-Helg_utan_alg-1.jpg'], 
    '25 Manna medeln': ['241013-25_Manna_medeln-8.jpg', '241013-25_Manna_medeln-7.jpg','241013-25_Manna_medeln-6.jpg', '241013-25_Manna_medeln-5.jpg', '241013-25_Manna_medeln-4.jpg', '241013-25_Manna_medeln-3.jpg', '241013-25_Manna_medeln-2.jpg', '241013-25_Manna_medeln-1.jpg'], 
    '25 manna': ['241012-25_manna-9.jpg', '241012-25_manna-8.jpg', '241012-25_manna-7.jpg', '241012-25_manna-6.jpg', '241012-25_manna-5.jpg', '241012-25_manna-4.jpg', '241012-25_manna-3.jpg', '241012-25_manna-2.jpg', '241012-25_manna-11.jpg', '241012-25_manna-10.jpg', '241012-25_manna-1.jpg']
};

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