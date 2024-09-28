document.addEventListener('click', (e) => {
    createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);
    
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Partikülü 600ms sonra sil
    setTimeout(() => {
        particle.remove();
    }, 600);
}
