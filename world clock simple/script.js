document.addEventListener('DOMContentLoaded', function () {
  const clockContainer = document.getElementById('clockContainer');
  const timeZones = ['America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney', 'Asia/Kolkata'];

  function updateClocks() {
    clockContainer.innerHTML = '';
    timeZones.forEach(timeZone => {
      const clock = document.createElement('div');
      clock.className = 'clock';
      const date = new Date().toLocaleString('en-US', { timeZone });
      const [time, period] = date.split(' ')[1].split(':');
      const city = timeZone.split('/')[1];

      clock.innerHTML = `
        <h2>${city}</h2>
        <p>${time} ${period}</p>
      `;

      clockContainer.appendChild(clock);
    });
  }

  updateClocks();
  setInterval(updateClocks, 1000);
});
