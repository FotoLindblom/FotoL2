
const images = [
    'LogoH30px.jpg',
    'PlaceholderCategory.jpg',
    'PlaceholderLandscape.jpg',
    'PlaceholderPortrait.jpg'
];

const container = document.getElementById('image-container');

function addImages() {
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = `assets/images/${image}`;
        
        const wrapper = document.createElement('div');
        wrapper.classList.add('image-wrapper');
        wrapper.appendChild(img);

        container.appendChild(wrapper);
    });
}

addImages();

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    if (aspectRatio > 1) {
        img.classList.add('landscape');
    } else {
        img.classList.add('portrait');
    }
});