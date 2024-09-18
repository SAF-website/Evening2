// data array
const images = [
    {
        src: 'gallery/images/1.jpg',
        alt: '',
        title: 'Traditional Attire',
        category: 'travel'
    },
    {
        src: 'gallery/images/2.jpg',
        alt: '',
        title: 'Bride’s Jewelry',
        category: 'travel'
    },
    {
        src: 'gallery/images/3.jpg',
        alt: '',
        title: 'Unity in Tradition',
        category: 'travel'
    },
    {
        src: 'gallery/images/4.jpg',
        alt: '',
        title: 'Wedding Attire',
        category: 'travel'
    },
    {
        src: 'gallery/images/5.jpg',
        alt: '',
        title: 'Ornate Elegance',
        category: 'travel'
    },
    {
        src: 'gallery/images/6.jpg',
        alt: '',
        title: 'Traditional Ceremony',
        category: 'travel'
    },
    {
        src: 'gallery/videos/video1.mp4',
        alt: '',
        title: 'Mr & Mrs',
        category: 'cinematic'
    },
    {
        src: 'gallery/videos/video2.mp4',
        alt: '',
        title: 'Cultural Ritual',
        category: 'cinematic'
    },
    {
        src: 'gallery/videos/video3.mp4',
        alt: '',
        title: 'Ritual Ceremony',
        category: 'cinematic, wedding'
    },
    {
        src: 'gallery/videos/video4.mp4',
        alt: '',
        title: 'Red Elegance Cinematic',
        category: 'cinematic, wedding'
    },
    {
        src: 'gallery/images/7.jpg',
        alt: '',
        title: 'Distant Silhouette',
        category: 'travel'
    },
    {
        src: 'gallery/images/8.jpg',
        alt: '',
        title: 'Traditional Elegance',
        category: 'travel'
    },
    {
        src: 'gallery/images/9.jpg',
        alt: '',
        title: 'Autumn Leaves',
        category: 'travel'
    },
    {
        src: 'gallery/images/10.jpg',
        alt: '',
        title: 'Henna Hands',
        category: 'travel'
    },
    {
        src: 'gallery/images/11.jpg',
        alt: '',
        title: 'Mountain View',
        category: 'travel'
    },
    {
        src: 'gallery/images/12.jpg',
        alt: '',
        title: 'Mountain Landscape',
        category: 'travel'
    },
    {
        src: 'gallery/images/13.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/14.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/15.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/16.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/17.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/18.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/19.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/20.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/21.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/22.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/23.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/24.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/25.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/26.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/27.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/28.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/29.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/30.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/31.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/32.jpg',
        alt: '',
        title: 'Scenic View',
        category: 'travel'
    },
    {
        src: 'gallery/images/01.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/02.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/03.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/04.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/05.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/06.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/07.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/08.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/09.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/10.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/11.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    },
    {
        src: 'gallery/images/12.jpg',
        alt: '',
        title: 'Groom’s Attire',
        category: 'wedding'
    }
];

// function to shuffle array 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

// function to get the current page type 

function getPageType() {
    const path = window.location.pathname;
    if (path.includes('wedding.html')) {
        return 'wedding';
    } else if (path.includes('travel.html')) {
        return 'travel';
    } else if (path.includes('cinematic.html')) {
        return 'cinematic';
    } else {
        return 'all';
    }
}

// function to filter images based on category 
function filterImages(images, category) {
    if (category === 'all') return images;
    return images.filter(image => image.category.split('.').map(c => c.trim()).includes(category));
}

// get current page type 
const pageType = getPageType();

// Filter images based on page type 
const filteredImages = filterImages(images, pageType);

// shuffled filtered images 
const shuffledFilteredImages = shuffleArray(filteredImages);




// get the container element 
const container = document.getElementById('card-container');

// Create and append card elements 
shuffledFilteredImages.forEach(items => {
    // Create card element 
    const card = document.createElement('div');
    card.classList.add('card');

    let video;

    // Check if the item is an image or video 
    if(items.src.endsWith('mp4')) {
        // Create video element 
        video = document.createElement('video');
        const videoIcon = document.createElement('i');
        videoIcon.classList.add('ai-video');
        video.src = items.src;
        video.alt = items.alt;
        video.muted = true;

        card.appendChild(video);
        card.appendChild(videoIcon);

        card.addEventListener('mouseenter', () => {
            video.play();
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
        })
    } else {
        // Create image element 
        const img = document.createElement('img');
        img.src = items.src;
        img.alt = items.alt;

        // append image to card 
        card.appendChild(img)
    }

    // Create title element 
    const title = document.createElement('h5');
    title.textContent = items.title;

    // append title to card 
    card.appendChild(title);

    container.appendChild(card);

    card.addEventListener('click', () => {
        openLightbox(items.src, items.title);
    })
})


// Get lightbox elements 
const lightbox = document.getElementById('lightbox'),
lightboxClose = document.getElementById('lightbox-close'),
lightboxCntent = document.getElementById('lightbox-content');

// function to open lightbox 
function openLightbox(src, title) {
    // clear previous content 
    lightboxCntent.innerHTML = '';

    const titleText = document.createElement('h5');
    

    if (src.endsWith('.mp4')) {
        // create video element for lightbox 
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;

        // append video element to lightbox 
        lightboxCntent.appendChild(video);
    } else {
        // create image Element 
        const img = document.createElement('img');
        img.src = src;
        img.alt = title;

        // append image to lightbox 
        lightboxCntent.appendChild(img);
    }

    // set title 
    titleText.textContent = title;
    lightboxCntent.appendChild(titleText);

    // display lightbox 
    lightbox.style.display = 'flex';
}

// function to close lightbox 
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// close lightbox when clicking outside of the content 

lightbox.addEventListener('click', (e) => {
    const video = lightboxCntent.querySelector('video');
    
    // if a video element is found, pause the video 
    if (video) {
        video.pause();
    }
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
})