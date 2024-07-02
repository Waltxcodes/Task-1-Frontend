document.addEventListener('DOMContentLoaded', () => {

  function updateTime() {
      const currentTimeElement = document.getElementById('currentTime');
      const currentDayElement = document.getElementById('currentDay');
      
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4];
      const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
      
      currentTimeElement.textContent = utcTime;
      currentDayElement.textContent = dayOfWeek;
  }

  
  updateTime();
  

  setInterval(updateTime, 1000);
});
