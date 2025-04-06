document.addEventListener('DOMContentLoaded', function() {
    const imgs = document.querySelectorAll('.header-slider ul img');
    const prev_btn = document.querySelector('.control-prev'); // Fixed class name
    const next_btn = document.querySelector('.control-next'); // Fixed class name

    let n = 0;

    function changeSlide() {
        // Hide all images
        imgs.forEach(img => {
            img.style.display = 'none';
        });
        
        // Show current image
        if (imgs[n]) {
            imgs[n].style.display = 'block';
        }
    }

    // Initialize slider
    changeSlide();

    // Previous button event
    prev_btn.addEventListener('click', (e) => {
        e.preventDefault();
        n = (n > 0) ? n - 1 : imgs.length - 1;
        changeSlide();
    });

    // Next button event
    next_btn.addEventListener('click', (e) => {
        e.preventDefault();
        n = (n < imgs.length - 1) ? n + 1 : 0;
        changeSlide();
    });
});

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}

