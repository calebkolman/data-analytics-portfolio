document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('movingBtn');

  button.addEventListener('mousemove', (event) => {
    const buttonRect = button.getBoundingClientRect();
    const offsetX = event.clientX - buttonRect.left;
    const offsetY = event.clientY - buttonRect.top;

    if (offsetX < 20) {
      button.style.left = `${buttonRect.left + 20}px`;
    } else if (offsetX > buttonRect.width - 20) {
      button.style.left = `${buttonRect.left - 20}px`;
    }

    if (offsetY < 20) {
      button.style.top = `${buttonRect.top + 20}px`;
    } else if (offsetY > buttonRect.height - 20) {
      button.style.top = `${buttonRect.top - 20}px`;
    }
  });
});
