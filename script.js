const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveNoButton() {
  const container = document.querySelector(".buttons");

  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = Math.max(0, containerRect.width - btnRect.width);
  const maxY = Math.max(0, containerRect.height - btnRect.height);

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML =
    '<h1 style="text-align:center;margin-top:30vh;font-family:Arial,sans-serif;color:#ff4d6d;">Yay! Happy Valentine\'s Day! 💖🎉</h1>';
});
