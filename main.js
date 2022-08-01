'use strict';
{
  const time = document.getElementById('timer');
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const resetButton = document.getElementById('reset');
  
  let startTime;
  let elapsedTime=0
  let timeoutID;
  
　// 時間を表示する関数
  function displayTime() {
    const currentTime = new Date(Date.now() - startTime +  elapsedTime);
    const h = String(currentTime.getHours()-9).padStart(1, '0');
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(2, '0');

    time.textContent = `${h}:${m}:${s}:${ms}`;
    timeoutID = setTimeout(displayTime, 10);
  }

  startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startTime = Date.now();
    displayTime();
  });

  stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    clearTimeout(timeoutID);
    elapsedTime += (Date.now() - startTime);
  });

  resetButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    time.textContent = '0:00:00.00';
    elapsedTime = 0;
  });
  
  
}