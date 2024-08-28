import { initializeGallery } from '/assets/js/loadImages.js';

const images = {
    'DM Lång': [
        '20240825-IMG_6928.jpg', 
        '20240825-IMG_6933.jpg', 
        '20240825-IMG_6945.jpg', 
        '20240825-IMG_6996.jpg', 
        '20240825-IMG_7001.jpg', 
        '20240825-IMG_7010.jpg', 
        '20240825-IMG_7049.jpg'
    ],
    'Mälerhöjden Medel': [
        '20240818-IMG_6816.jpg', 
        '20240818-IMG_6819.jpg', 
        '20240818-IMG_6831.jpg', 
        '20240818-IMG_6837.jpg', 
        '20240818-IMG_6859.jpg', 
        '20240818-IMG_6865.jpg'
    ], 
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