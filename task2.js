document.getElementById("start-button").addEventListener("click", function() {
    let duration = parseInt(document.getElementById("duration").value);
    
    let countdown = duration;
    let timerDisplay = document.getElementById("timer-display");
    
    const interval = setInterval(function() {
      let seconds = countdown;
      timerDisplay.textContent = `${String(seconds)} seconds`;
      countdown--;
      
      if (countdown < 0) {
        clearInterval(interval); 
        timerDisplay.textContent = "0 seconds";
        alert("Time's up!");
      }
    }, 1000);
  });

window.addEventListener("load", function() {
    setTimeout(function() {
        alert("10 second notification!")
    }, 10000)
})

window.addEventListener("load", function() {
    const intervalID = setInterval(function() {
        updateUI()
    }, 5000)

    document.getElementById("stop-alert").addEventListener("click", function() {
        clearInterval(intervalID);
        const alertList = document.getElementById('fixed-interval-alert');
        const alertDiv = document.createElement('div');
        alertDiv.innerHTML = `<p>Alert has been cancelled.</p>`;
        alertList.appendChild(alertDiv);    });
});

function updateUI() {
    const alertList = document.getElementById('fixed-interval-alert');
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = `<p>Alert! This goes off every 5 seconds. Press cancel to stop these alerts.</p>`;
    alertList.appendChild(alertDiv);
}