document.addEventListener('DOMContentLoaded', function() {
  const messages = [
    "메시지 1", "메시지 2", "메시지 3", "메시지 4", "메시지 5",
    "메시지 6", "메시지 7", "메시지 8", "메시지 9", "메시지 10"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = randomMessage;

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.src = 'images/sheep.jpg';

  image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
  };

  canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const pixel = ctx.getImageData(x, y, 1, 1);
    if (pixel.data[3] > 0) {
      pixel.data[3] = Math.max(pixel.data[3] - 51, 0); // 51 is 20% of 255
      ctx.putImageData(pixel, x, y);
    }

    if (isCanvasCleared(ctx, canvas)) {
      messageDiv.style.display = 'block';
    }
  });

  function isCanvasCleared(ctx, canvas) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] !== 0) {
        return false;
      }
    }
    return true;
  }
});
