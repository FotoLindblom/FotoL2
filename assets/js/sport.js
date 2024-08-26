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

document.addEventListener("DOMContentLoaded", () => {
    initializeGallery(images[Object.keys(images)[0]], 'media/sports')

    Object.keys(images).forEach(event => {
        const span = document.createElement("span");
        span.textContent = event;
        span.classList.add('filter')
        span.addEventListener("click", () => {
            imageContainer.innerHTML = '';
            initializeGallery(images[event], 'media/sports'); // Use the variable event here
        });
        
        filterBtnContainer.appendChild(span);
    });
});