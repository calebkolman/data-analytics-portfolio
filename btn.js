document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('movingBtn');
  const container = button.parentElement; // Assuming the button is inside a parent container.

  // Initialize button position (if not already styled in CSS)
  button.style.position = 'absolute';
  button.style.left = '50%';
  button.style.top = '50%';
  button.style.transform = 'translate(-50%, -50%)';

  button.addEventListener('mousemove', (event) => {
    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate mouse position relative to button
    const offsetX = event.clientX - buttonRect.left;
    const offsetY = event.clientY - buttonRect.top;

    // Check if the cursor is near the edges of the button
    if (offsetX < 20) {
      let newLeft = parseFloat(button.style.left) - 10;
      if (newLeft > 0) {
        button.style.left = `${newLeft}px`;
      }
    } else if (offsetX > buttonRect.width - 20) {
      let newLeft = parseFloat(button.style.left) + 10;
      if (newLeft + buttonRect.width < containerRect.width) {
        button.style.left = `${newLeft}px`;
      }
    }

    if (offsetY < 20) {
      let newTop = parseFloat(button.style.top) - 10;
      if (newTop > 0) {
        button.style.top = `${newTop}px`;
      }
    } else if (offsetY > buttonRect.height - 20) {
      let newTop = parseFloat(button.style.top) + 10;
      if (newTop + buttonRect.height < containerRect.height) {
        button.style.top = `${newTop}px`;
      }
    }
  });
});
