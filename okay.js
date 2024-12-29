function checkWindowSize() {
    if (window.innerWidth < 600) {
        document.body.classList.add('minimized');
    } else {
        document.body.classList.remove('minimized');
    }
}

window.addEventListener('resize', checkWindowSize);
window.addEventListener('load', checkWindowSize);