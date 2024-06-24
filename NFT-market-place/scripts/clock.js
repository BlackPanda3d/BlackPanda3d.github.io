function  timer() {
    try {
        function startCountdown(duration) {
            let timer = duration, hours, minutes, seconds;
            setInterval(function () {
                hours = parseInt(timer / 3600, 10);
                minutes = parseInt((timer % 3600) / 60, 10);
                seconds = parseInt(timer % 60, 10);
  
                hours = hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
  
                document.getElementById('hours').textContent = hours;
                document.getElementById('minutes').textContent = minutes;
                document.getElementById('seconds').textContent = seconds;
  
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }
  
        let duration = 60 * 60 * 60; // Перетворити години на секунди
        startCountdown(duration);
    } catch (error) {
        console.error("Сталася помилка: ", error);
    }
  };
  
  timer();