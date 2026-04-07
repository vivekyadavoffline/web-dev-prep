// Particles.js Configuration for Background Love/Stars
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": ["#FF2E63", "#08D9D6", "#ffffff"] },
        "shape": { "type": ["circle", "star"], "stroke": { "width": 0, "color": "#000000" } },
        "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 4, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } },
        "line_linked": { "enable": true, "distance": 150, "color": "#FF2E63", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "bubble": { "distance": 200, "size": 6, "duration": 2, "opacity": 0.8, "speed": 3 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
});

// Interactive GSAP-like Scroll Animations via Intersection Observer
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Don't unobserve if we want them to re-animate (excessive animation!)
            // observer.unobserve(entry.target); 
        } else {
            // Remove class to animate again when scrolling back
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in-up, .zoom-in, .pop-up, .slide-up').forEach(el => {
    animationObserver.observe(el);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle logic
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-card)';
        navLinks.style.padding = '2rem';
        navLinks.style.borderBottom = '2px solid var(--border)';
        mobileBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});

// Smooth scrolling & active link clicking
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        }
    });
});

// Dynamic Buttons Logic (Ripples & Confetti)
document.querySelectorAll('.order-btn, .interactive-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Trigger specific confetti on click
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { 
                x: e.clientX / window.innerWidth, 
                y: e.clientY / window.innerHeight 
            },
            colors: ['#FF2E63', '#08D9D6', '#FFFFFF']
        });
        
        // Show alert if it's an order button
        if(btn.classList.contains('order-btn')) {
            setTimeout(() => {
                alert("Mohabbat delivered! Your Sharbat is being prepared with love \u2764\uFE0F");
            }, 300);
        }
    });
});

// ==========================================
// SHARBAT POURING (CATCH THE DROPS) GAME LOGIC
// ==========================================
const gameArea = document.getElementById('game-area');
const catcher = document.getElementById('catcher');
const scoreDisplay = document.getElementById('game-score');
const timerDisplay = document.getElementById('game-timer');
const startBtn = document.getElementById('start-game-btn');
const restartBtn = document.getElementById('restart-game-btn');
const messageBox = document.getElementById('game-message');
const finalScoreDisplay = document.getElementById('final-score');

let score = 0;
let timeLeft = 30;
let gameInterval;
let dropInterval;
let isPlaying = false;

// Move catcher with mouse inside game area
gameArea.addEventListener('mousemove', (e) => {
    if (!isPlaying) return;
    const rect = gameArea.getBoundingClientRect();
    let x = e.clientX - rect.left;
    // Boundries
    if (x < 30) x = 30;
    if (x > rect.width - 30) x = rect.width - 30;
    catcher.style.left = x + 'px';
});

// For Touch / Mobile
gameArea.addEventListener('touchmove', (e) => {
    if (!isPlaying) return;
    e.preventDefault(); // prevent scrolling
    const rect = gameArea.getBoundingClientRect();
    let x = e.touches[0].clientX - rect.left;
    if (x < 30) x = 30;
    if (x > rect.width - 30) x = rect.width - 30;
    catcher.style.left = x + 'px';
}, { passive: false });

function createDrop() {
    const drop = document.createElement('i');
    drop.classList.add('fa-solid', 'fa-heart', 'game-drop');
    
    // Randomize initial position
    const rect = gameArea.getBoundingClientRect();
    const randomX = Math.random() * (rect.width - 40) + 20;
    drop.style.left = randomX + 'px';
    
    gameArea.appendChild(drop);

    let dropTop = -30;
    const speed = Math.random() * 3 + 2; // pixel per frame

    const fall = setInterval(() => {
        if (!isPlaying) {
            clearInterval(fall);
            return;
        }

        dropTop += speed;
        drop.style.top = dropTop + 'px';

        // Collision detection
        const dropRect = drop.getBoundingClientRect();
        const catcherRect = catcher.getBoundingClientRect();

        if (
            dropRect.bottom >= catcherRect.top &&
            dropRect.top <= catcherRect.bottom &&
            dropRect.right >= catcherRect.left &&
            dropRect.left <= catcherRect.right
        ) {
            // Caught!
            score += 10;
            scoreDisplay.innerText = score;
            clearInterval(fall);
            drop.remove();
            
            // Mini visual feedback on catcher
            catcher.style.transform = 'translateX(-50%) scale(1.2)';
            catcher.style.borderColor = '#fff';
            setTimeout(() => {
                catcher.style.transform = 'translateX(-50%) scale(1)';
                catcher.style.borderColor = 'var(--primary)';
            }, 100);

        } else if (dropTop > rect.height) {
            // Missed!
            clearInterval(fall);
            drop.remove();
        }
    }, 20); // 50fps
}

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.innerText = score;
    timerDisplay.innerText = timeLeft;
    messageBox.classList.add('hidden');
    startBtn.style.display = 'none';
    isPlaying = true;

    // Clear old drops if any
    document.querySelectorAll('.game-drop').forEach(d => d.remove());

    // Timer logic
    gameInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    // Drop spawning logic
    dropInterval = setInterval(() => {
        createDrop();
    }, 600); // 1 drop every 600ms
}

function endGame() {
    isPlaying = false;
    clearInterval(gameInterval);
    clearInterval(dropInterval);
    
    finalScoreDisplay.innerText = score;
    messageBox.classList.remove('hidden');
    
    if (score > 100) {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 }
        });
    }
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
