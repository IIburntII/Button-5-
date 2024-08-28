document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('prizeButton');

    button.addEventListener('touchstart', function(event) {
        event.preventDefault();

        // Random position for the button
        const x = Math.random() * (window.innerWidth - button.clientWidth);
        const y = Math.random() * (window.innerHeight - button.clientHeight);

        // Move the button to the new random position
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;

        // Add bounce effect
        button.classList.add('bounced');
        setTimeout(() => {
            button.classList.remove('bounced');
        }, 500);
    });
});
