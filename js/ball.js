const canvas = document.getElementById('ballCanvas');
const ctx = canvas.getContext('2d');
const container = canvas.parentElement;

function resizeCanvas() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const circleRadius = 30;
let circleX = canvas.width / 3;
let circleY = canvas.height / 2;
let targetX = circleX;
let targetY = circleY;
let isMouseInside = false;

// Smooth follow
const smoothness = 0.025;

// Track mouse
container.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
    isMouseInside = true;
});

container.addEventListener('mouseleave', () => {
    isMouseInside = false;
    targetX = canvas.width / 3;
    targetY = canvas.height / 2;
});

// Touch support
container.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    targetX = touch.clientX - rect.left;
    targetY = touch.clientY - rect.top;
    isMouseInside = true;
}, { passive: false });

container.addEventListener('touchend', () => {
    isMouseInside = false;
    targetX = canvas.width / 2;
    targetY = canvas.height / 2;
});


function animate() {
    circleX += (targetX - circleX) * smoothness;
    circleY += (targetY - circleY) * smoothness;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#000000';
    ctx.fill();

    requestAnimationFrame(animate);
}

animate();
