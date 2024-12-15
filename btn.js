document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('movingBtn');
  const container = button.parentElement;

  // Ensure the parent container has position: relative
  if (getComputedStyle(container).position === 'static') {
    container.style.position = 'relative';
  }

  // Set the initial position of the button dynamically
  button.style.position = 'absolute';
  button.style.left = '50%';
  button.style.top = '50%';
  button.style.transform = 'translate(-50%, -50%)';

  // Add mousemove event listener
  button.addEventListener('mousemove', (event) => {
    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate mouse position relative to button
    const offsetX = event.clientX - buttonRect.left;
    const offsetY = event.clientY - buttonRect.top;

    // Define new positions
    let newLeft = parseFloat(button.style.left) || 0;
    let newTop = parseFloat(button.style.top) || 0;

    // Move button horizontally if cursor is near the edges
    if (offsetX < 20) {
      newLeft -= 10;
    } else if (offsetX > buttonRect.width - 20) {
      newLeft += 10;
    }

    // Move button vertically if cursor is near the edges
    if (offsetY < 20) {
      newTop -= 10;
    } else if (offsetY > buttonRect.height - 20) {
      newTop += 10;
    }

    // Prevent the button from moving outside the container
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft + buttonWidth > containerWidth) newLeft = containerWidth - buttonWidth;
    if (newTop + buttonHeight > containerHeight) newTop = containerHeight - buttonHeight;

    // Update button position
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
  });
});
