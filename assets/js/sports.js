const images = ['20240825-IMG_7049.jpg','20240825-IMG_7010.jpg','20240825-IMG_7001.jpg','20240825-IMG_6996.jpg','20240825-IMG_6945.jpg',
'20240825-IMG_6933.jpg','20240825-IMG_6928.jpg','20240818-IMG_6865.jpg','20240818-IMG_6859.jpg','20240818-IMG_6837.jpg',
'20240818-IMG_6831.jpg','20240818-IMG_6819.jpg','20240818-IMG_6816.jpg',];

window.onload = () => {
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

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                loadHighResImage(img);
                observer.unobserve(img);
            }
        });
    }, { rootMargin: "0px", threshold: 0.1 });

    const loadImages = (images) => {
        return new Promise((resolve, reject) => {
            try {
                images.forEach(image => {
                    const img = document.createElement("img");
                    img.src = `media/sports/low-res/${image}`;
                    img.dataset.src = `media/sports/mid-res/${image}`;
                    img.alt = "sports image";
                    img.classList.add("placeholder");

                    const aspectRatio = img.naturalWidth / img.naturalHeight;
                    if (aspectRatio > 1) {
                        img.classList.add("landscape");
                    } else {
                        img.classList.add("portrait");
                    }

                    const wrapper = document.createElement("div");
                    wrapper.classList.add("image-wrapper");
                    wrapper.appendChild(img);

                    container.appendChild(wrapper);

                    imageObserver.observe(img);
                });
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };

    loadImages(images)
        .then(() => initializeCarousel())
        .catch(error => console.error("Error loading images:", error));

    function initializeCarousel() {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("carouselImage");
        const images = container.querySelectorAll("img");
        const closeBtn = document.querySelector(".close");
        const downloadBtn = document.querySelector(".download");
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");

        let currentIndex = 0;

        images.forEach((img, index) => {
            img.addEventListener("click", function () {
                currentIndex = index;

                loadHighResImage(img).then(() => {
                    modal.style.display = "block";
                    loadImage(currentIndex);
                }).catch(() => {
                    modal.style.display = "block";
                    loadImage(currentIndex); 
                });
            });
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            loadImage(currentIndex);
        });

        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            loadImage(currentIndex);
        });

        function loadImage(index) {
            modalImg.src = images[index].src;
            downloadBtn.href = images[index].src.replace('mid-res', 'high-res');
            console.log(downloadBtn)

            const nextIndex = (index + 1) % images.length;
            const prevIndex = (index - 1 + images.length) % images.length;

            loadHighResImage(images[nextIndex]);
            loadHighResImage(images[prevIndex]);
        }
    }
};
