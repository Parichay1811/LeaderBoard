let score = 0;

function increaseScore() {
    score++;
    updateScore();
}

function decreaseScore() {
    if (score > 0) score--;
    updateScore();
}

function resetScore() {
    score = 0;
    updateScore();
}

function updateScore() {
    document.getElementById('score').value = score;
}

function addScore() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;

    if (firstName && lastName && country) {
        const table = document.getElementById('scoreTable');
        const row = table.insertRow();

        row.insertCell(0).textContent = firstName;
        row.insertCell(1).textContent = lastName;
        row.insertCell(2).textContent = country;
        row.insertCell(3).textContent = score;

        // Clear input fields and reset score
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('country').value = '';
        resetScore();
    } else {
        alert('Please fill out all fields.');
    }
}
