import { initializeGallery } from '../../assets/js/loadImages.js';

const images = {
    '25 Manna': ['241012-25M-1', '241012-25M-2', '241012-25M-3', '241012-25M-4', '241012-25M-5', '241012-25M-6', '241012-25M-7', '241012-25M-8', '241012-25M-9', '241012-25M-10', '241012-25M-11'], 
    '25 Manna Medeln': ['241013_25MM-1', '241013_25MM-2', '241013_25MM-3', '241013_25MM-4', '241013_25MM-5', '241013_25MM-6', '241013_25MM-7', '241013_25MM-8', '241013_25MM-9', '241013_25MM-10', '241013_25MM-11', '241013_25MM-12'], 
    'Hälg Utan Älg': ['241019-HUA-1', '241019-HUA-2', '241019-HUA-3', '241019-HUA-4', '241019-HUA-5', '241019-HUA-6', '241019-HUA-7']
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