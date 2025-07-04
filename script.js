// ====== ANIMACIÓN DE GOTAS ======
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

function createDrop() {
    drops.push({
        x: Math.random() * canvas.width,
        y: -20,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 4 + 4
    });
}

function drawDrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = drops.length - 1; i >= 0; i--) {
        const drop = drops[i];

        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffff';
        ctx.fill();

        drop.y += drop.speed;

        if (drop.y - drop.radius > canvas.height) {
            drops.splice(i, 1);
        }
    }
}

function animate() {
    drawDrops();
    requestAnimationFrame(animate);
}

setInterval(createDrop, 100);
animate();

// ====== LOGIN / REGISTER ======
const formTitle = document.getElementById('form-title');
const emailField = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const toggleLink = document.getElementById('toggle-link');
const backBtn = document.getElementById('back-btn');

let isRegister = false;

function toggleForm() {
    isRegister = !isRegister;

    if (isRegister) {
        formTitle.textContent = 'REGISTER';
        emailField.classList.remove('hidden');
        submitBtn.value = 'Register';
        toggleLink.textContent = 'Switch to Login';
    } else {
        formTitle.textContent = 'LOGIN';
        emailField.classList.add('hidden');
        submitBtn.value = 'Sign in';
        toggleLink.textContent = 'Switch to Register';
    }
}

toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm();
});

// Cuando haga click en login/register te lleva a inicio.html
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "inicio.html";
});

// Cuando haga click en regresar, también te lleva a inicio.html
backBtn.addEventListener('click', () => {
    window.location.href = "inicio.html";
});
