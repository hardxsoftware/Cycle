// Responsive lineup image swapping
function updateLineupImage() {
    const lineupImage = document.getElementById('lineup-image');
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 480) {
        lineupImage.src = 'Assets/Lineup-Mobile.png';
    } else {
        lineupImage.src = 'Assets/Lineup.png';
    }
}

// Update on page load
document.addEventListener('DOMContentLoaded', updateLineupImage);

// Update on window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateLineupImage, 250);
});
