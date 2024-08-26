
const images = [
    'LogoH30px.jpg',
    'PlaceholderCategory.jpg',
    'PlaceholderLandscape.jpg',
    'PlaceholderPortrait.jpg'
];

const container = document.getElementById('image-container');
images.forEach(image => {
    const img = document.createElement('img');
    img.src = `assets/images/${image}`;
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('image-wrapper');
    wrapper.appendChild(img);

    container.appendChild(wrapper);
});


const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    img.addEventListener('load', () => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;

        if (aspectRatio > 1) {
            img.classList.add('landscape');
        } else {
            img.classList.add('portrait');
        }
    });
    
    if (img.complete) {
        img.dispatchEvent(new Event('load'));
    }
});