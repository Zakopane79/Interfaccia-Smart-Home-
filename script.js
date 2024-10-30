function createParticles(x, y) {
    for (let i = 0; i < 8; i++) {
        let particle = document.createElement('div');
        particle.className = 'particle';
        document.body.appendChild(particle);
        
        let destinationX = x + (Math.random() - 0.5) * 100;
        let destinationY = y + (Math.random() - 0.5) * 100;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        gsap.to(particle, {
            x: destinationX - x,
            y: destinationY - y,
            duration: 0.6,
            ease: "power2.out",
            opacity: 0,
            onComplete: () => particle.remove()
        });
    }
}

document.querySelectorAll('.wheel-segment').forEach(segment => {
    segment.addEventListener('click', (e) => {
        let rect = segment.getBoundingClientRect();
        createParticles(rect.left + rect.width/2, rect.top + rect.height/2);
    });
});
