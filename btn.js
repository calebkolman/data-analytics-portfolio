document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('movingBtn');

  button.addEventListener('mouseover', () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const randomX = Math.floor(Math.random() * (windowWidth - button.clientWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - button.clientHeight));

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  });
});
