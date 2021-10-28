const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    img.removeAttribute('data-src')
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 300px 0px'
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});



// function preloadImage(img) {
//     const src = img.getAttribute('data-src');
//     img.removeAttribute('data-src')
//     if (!src) {
//         return;
//     }

//     img.src = src;
// }

// const imgOptions = {
//     theshold: 0,
//     rootMargin: '0px 0px -600px 0px',
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach((entry) => {
//         if(!entry.isIntersecting) {
//             return;
//         } else {
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//     });
// }, imgOptions);

// images.forEach((image) => {
//     imgObserver.observe(image);
// });