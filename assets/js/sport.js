// import { initializeGallery } from '/assets/js/loadImages.js';
export const initializeGallery = (images, path) => {
    const container = document.getElementById("image-container");

    const loadHighResImage = (img) => {
        return new Promise((resolve, reject) => {
            const highResImg = new Image();
            highResImg.src = img.dataset.src;

            highResImg.onload = () => {
                img.src = highResImg.src;
                img.classList.remove("placeholder");
                img.classList.add("fullRes");
                resolve();
            };

            highResImg.onerror = () => {
                img.classList.add("error");
                console.error(`Failed to load high-resolution image: ${img.dataset.src}`);
                reject();
            };
        });
    };

    const createImageElement = (image) => {
        const img = document.createElement("img");
        img.src = `${path}/low-res/${image}`;
        img.dataset.src = `${path}/mid-res/${image}`;
        img.alt = "sports image";
        img.classList.add("placeholder");

        const aspectRatio = img.naturalWidth / img.naturalHeight;
        if (aspectRatio > 1) {
            img.classList.add("landscape");
        } else {
            img.classList.add("portrait");
        }

        return img;
    };

    const createImageWrapper = (img) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("image-wrapper");
        wrapper.appendChild(img);
        return wrapper;
    };

    const setupImageObserver = (observer, images) => {
        images.forEach(image => {
            const imgElement = createImageElement(image);
            const wrapper = createImageWrapper(imgElement);

            container.appendChild(wrapper);
            observer.observe(imgElement);
        });
    };

    const initializeObserver = () => {
        const observerOptions = {
            rootMargin: "0px",
            threshold: 0.1
        };

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadHighResImage(img);
                    observer.unobserve(img);
                }
            });
        }, observerOptions);

        return imageObserver;
    };

    const loadImages = (images) => {
        return new Promise((resolve, reject) => {
            try {
                const imageObserver = initializeObserver();
                setupImageObserver(imageObserver, images);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };

    const initializeCarousel = () => {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("carouselImage");
        const images = container.querySelectorAll("img");
        const closeBtn = document.querySelector(".close");
        const downloadBtn = document.querySelector(".download");
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");

        let currentIndex = 0;

        const loadImage = (index) => {
            modalImg.src = images[index].src;
            downloadBtn.href = images[index].src.replace('mid-res', 'high-res');

            const nextIndex = (index + 1) % images.length;
            const prevIndex = (index - 1 + images.length) % images.length;

            loadHighResImage(images[nextIndex]);
            loadHighResImage(images[prevIndex]);
        };

        images.forEach((img, index) => {
            img.addEventListener("click", () => {
                currentIndex = index;
                loadHighResImage(img).finally(() => {
                    modal.style.display = "block";
                    loadImage(currentIndex);
                });
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            loadImage(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            loadImage(currentIndex);
        });
    };

    loadImages(images)
        .then(() => initializeCarousel())
        .catch(error => console.error("Error loading images:", error));
};

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