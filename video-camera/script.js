
document.addEventListener('DOMContentLoaded', function () {
  const videoElement = document.getElementById('videoElement');

  // Намагаємося отримати доступ до веб-камери
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      // Успішно отримали доступ, встановлюємо відеопотік в відео-елемент
      videoElement.srcObject = stream;
    })
    .catch(function (error) {
      console.error('Помилка при отриманні доступу до веб-камери:', error);
    });
});
