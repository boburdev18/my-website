// Light/Dark mode toggle
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

// Canvas background (bubbles)
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

for (let i = 0; i < 50; i++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5 + 1,
    d: Math.random() * 2 + 1
  });
}

function drawBubbles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.1)";
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
    ctx.fill();
    b.y -= b.d;
    if (b.y < -10) {
      b.y = canvas.height + 10;
      b.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawBubbles);
}

drawBubbles();
