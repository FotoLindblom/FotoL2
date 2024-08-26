const images = [
    '240825-DM_Lång-1.jpg', '240825-DM_Lång-10.jpg', '240825-DM_Lång-100.jpg', '240825-DM_Lång-101.jpg', '240825-DM_Lång-102.jpg', '240825-DM_Lång-103.jpg', 
    '240825-DM_Lång-104.jpg', '240825-DM_Lång-105.jpg', '240825-DM_Lång-106.jpg', '240825-DM_Lång-107.jpg', '240825-DM_Lång-108.jpg', '240825-DM_Lång-109.jpg', 
    '240825-DM_Lång-11.jpg', '240825-DM_Lång-110.jpg', '240825-DM_Lång-111.jpg', '240825-DM_Lång-112.jpg', '240825-DM_Lång-113.jpg', '240825-DM_Lång-114.jpg', 
    '240825-DM_Lång-115.jpg', '240825-DM_Lång-116.jpg', '240825-DM_Lång-117.jpg', '240825-DM_Lång-118.jpg', '240825-DM_Lång-119.jpg', '240825-DM_Lång-12.jpg', 
    '240825-DM_Lång-120.jpg', '240825-DM_Lång-121.jpg', '240825-DM_Lång-122.jpg', '240825-DM_Lång-123.jpg', '240825-DM_Lång-124.jpg', '240825-DM_Lång-125.jpg', 
    '240825-DM_Lång-126.jpg', '240825-DM_Lång-127.jpg', '240825-DM_Lång-128.jpg', '240825-DM_Lång-129.jpg', '240825-DM_Lång-13.jpg', '240825-DM_Lång-130.jpg', 
    '240825-DM_Lång-131.jpg', '240825-DM_Lång-132.jpg', '240825-DM_Lång-133.jpg', '240825-DM_Lång-134.jpg', '240825-DM_Lång-135.jpg', '240825-DM_Lång-136.jpg', 
    '240825-DM_Lång-137.jpg', '240825-DM_Lång-138.jpg', '240825-DM_Lång-139.jpg', '240825-DM_Lång-14.jpg', '240825-DM_Lång-140.jpg', '240825-DM_Lång-141.jpg', 
    '240825-DM_Lång-142.jpg', '240825-DM_Lång-143.jpg', '240825-DM_Lång-144.jpg', '240825-DM_Lång-145.jpg', '240825-DM_Lång-146.jpg', '240825-DM_Lång-147.jpg', 
    '240825-DM_Lång-148.jpg', '240825-DM_Lång-149.jpg', '240825-DM_Lång-15.jpg', '240825-DM_Lång-150.jpg', '240825-DM_Lång-151.jpg', '240825-DM_Lång-152.jpg', 
    '240825-DM_Lång-153.jpg', '240825-DM_Lång-154.jpg', '240825-DM_Lång-155.jpg', '240825-DM_Lång-16.jpg', '240825-DM_Lång-17.jpg', '240825-DM_Lång-18.jpg', 
    '240825-DM_Lång-19.jpg', '240825-DM_Lång-2.jpg', '240825-DM_Lång-20.jpg', '240825-DM_Lång-21.jpg', '240825-DM_Lång-22.jpg', '240825-DM_Lång-23.jpg', 
    '240825-DM_Lång-24.jpg', '240825-DM_Lång-25.jpg', '240825-DM_Lång-26.jpg', '240825-DM_Lång-27.jpg', '240825-DM_Lång-28.jpg', '240825-DM_Lång-29.jpg', 
    '240825-DM_Lång-3.jpg', '240825-DM_Lång-30.jpg', '240825-DM_Lång-31.jpg', '240825-DM_Lång-32.jpg', '240825-DM_Lång-33.jpg', '240825-DM_Lång-34.jpg', 
    '240825-DM_Lång-35.jpg', '240825-DM_Lång-36.jpg', '240825-DM_Lång-37.jpg', '240825-DM_Lång-38.jpg', '240825-DM_Lång-39.jpg', '240825-DM_Lång-4.jpg', 
    '240825-DM_Lång-40.jpg', '240825-DM_Lång-41.jpg', '240825-DM_Lång-42.jpg', '240825-DM_Lång-43.jpg', '240825-DM_Lång-44.jpg', '240825-DM_Lång-45.jpg', 
    '240825-DM_Lång-46.jpg', '240825-DM_Lång-47.jpg', '240825-DM_Lång-48.jpg', '240825-DM_Lång-49.jpg', '240825-DM_Lång-5.jpg', '240825-DM_Lång-50.jpg', 
    '240825-DM_Lång-51.jpg', '240825-DM_Lång-52.jpg', '240825-DM_Lång-53.jpg', '240825-DM_Lång-54.jpg', '240825-DM_Lång-55.jpg', '240825-DM_Lång-56.jpg', 
    '240825-DM_Lång-57.jpg', '240825-DM_Lång-58.jpg', '240825-DM_Lång-59.jpg', '240825-DM_Lång-6.jpg', '240825-DM_Lång-60.jpg', '240825-DM_Lång-61.jpg', 
    '240825-DM_Lång-62.jpg', '240825-DM_Lång-63.jpg', '240825-DM_Lång-64.jpg', '240825-DM_Lång-65.jpg', '240825-DM_Lång-66.jpg', '240825-DM_Lång-67.jpg', 
    '240825-DM_Lång-68.jpg', '240825-DM_Lång-69.jpg', '240825-DM_Lång-7.jpg', '240825-DM_Lång-70.jpg', '240825-DM_Lång-71.jpg', '240825-DM_Lång-72.jpg', 
    '240825-DM_Lång-73.jpg', '240825-DM_Lång-74.jpg', '240825-DM_Lång-75.jpg', '240825-DM_Lång-76.jpg', '240825-DM_Lång-77.jpg', '240825-DM_Lång-78.jpg', 
    '240825-DM_Lång-79.jpg', '240825-DM_Lång-8.jpg', '240825-DM_Lång-80.jpg', '240825-DM_Lång-81.jpg', '240825-DM_Lång-82.jpg', '240825-DM_Lång-83.jpg', 
    '240825-DM_Lång-84.jpg', '240825-DM_Lång-85.jpg', '240825-DM_Lång-86.jpg', '240825-DM_Lång-87.jpg', '240825-DM_Lång-88.jpg', '240825-DM_Lång-89.jpg', 
    '240825-DM_Lång-9.jpg', '240825-DM_Lång-90.jpg', '240825-DM_Lång-91.jpg', '240825-DM_Lång-92.jpg', '240825-DM_Lång-93.jpg', '240825-DM_Lång-94.jpg', 
    '240825-DM_Lång-95.jpg', '240825-DM_Lång-96.jpg', '240825-DM_Lång-97.jpg', '240825-DM_Lång-98.jpg', '240825-DM_Lång-99.jpg'
];

window.onload = () => {
    const container = document.getElementById('image-container');

    const loadHighResImage = (img) => {
        const highResImg = new Image();
        highResImg.src = img.dataset.src;

        highResImg.onload = () => {
            img.src = highResImg.src;
            img.classList.remove('placeholder');
        };

        highResImg.onerror = () => {
            img.classList.add('error');
            console.error(`Failed to load high-resolution image: ${img.dataset.src}`);
        };
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                loadHighResImage(img);
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '0px', threshold: 0.1 });

    const loadImages = (images) => {
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = `media/sports/low-res/${image}`;
            img.dataset.src = `media/sports/mid-res/${image}`;
            img.alt = 'sports image';
            img.classList.add('placeholder');

            const aspectRatio = img.naturalWidth / img.naturalHeight;
            if (aspectRatio > 1) {
                img.classList.add('landscape');
            } else {
                img.classList.add('portrait');
            }

            const wrapper = document.createElement('div');
            wrapper.classList.add('image-wrapper');
            wrapper.appendChild(img);

            container.appendChild(wrapper);

            imageObserver.observe(img);
        });
    };
    
    loadImages(images).catch(error => {console.error('Error loading images:', error);
    });
};