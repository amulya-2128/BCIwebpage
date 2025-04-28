
const ctx = document.getElementById('brainwaveChart').getContext('2d');
const brainwaveChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 20}, (_, i) => i),
        datasets: [{
            label: 'Brainwave Signal',
            data: Array.from({length: 20}, () => Math.random() * 100),
            borderColor: '#da0000',
            tension: 0.4,
        }]
    },
    options: {
        animation: false,
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    }
});

setInterval(() => {
    brainwaveChart.data.datasets[0].data.shift();
    brainwaveChart.data.datasets[0].data.push(Math.random() * 100);
    brainwaveChart.update();
}, 500);

function simulateControl(action) {
    const log = document.getElementById('log');
    const time = new Date().toLocaleTimeString();
    log.innerHTML = `[${time}] Command Sent: ${action}<br>` + log.innerHTML;
}

// Show Login Panel Modal
function showLoginPanel() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Close Login Panel Modal
function closeLoginPanel() {
    document.getElementById('loginModal').style.display = 'none';
}

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Fake login validation
    if (username === "patient" && password === "1234") {
        window.location.reload(); // Reload to simulate successful login
    } else {
        document.getElementById('loginMessage').textContent = "Invalid username or password!";
    }
});
// Handle Forgot Username
function showForgotUsernamePanel() {
    document.getElementById('forgotUsernameModal').style.display = 'flex';
}

function closeForgotUsernamePanel() {
    document.getElementById('forgotUsernameModal').style.display = 'none';
}

document.getElementById('forgotUsernameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('forgotEmail').value;
    
    // Simulate email validation
    if (email === "patient@example.com") {
        alert("Your username is: patient");
        closeForgotUsernamePanel();
    } else {
        document.getElementById('forgotUsernameMessage').textContent = "Email not found!";
    }
});
