function toggleMenu(menuIcon){
    const nav = document.querySelector('.nav-links ul');
    menuIcon.classList.toggle('active');
    nav.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if(window.innerWidth <= 768) {
                document.querySelector('.nav-links ul').classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('demoVideo');
    
    if (video) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If 50% of the video is visible, play it
                if (entry.isIntersecting) {
                    video.play().catch(error => {
                        // Browsers might block autoplay if not muted
                        console.log("Autoplay blocked:", error);
                    });
                } else {
                    // Pause if scrolled out of view to save resources
                    video.pause();
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% visible

        videoObserver.observe(video);
    }
});