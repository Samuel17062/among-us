
const roles = [];

function generateRole() {
    // Get the total number of players from the input field
    const totalPlayers = parseInt(document.getElementById('total-players').value, 10);

    // Ensure there are at least 3 players and enough roles
    if (totalPlayers < 3) {
        alert('There must be at least 3 players.');
        return;
    }

    const numImposters = 1; 
    const numJesters = 1; // Number of jesters
    const numdoctors = 1; // Number of doctors
    const numSheriffs = 1; // Number of numSheriffs
    if (totalPlayers <= numImposters + numJesters + numSheriffs + numdoctors) {
        alert('There must be more players than imposters, jesters,doctors and sheriffs combined.');
        return;
    }

    // Create an array of roles
    for (let i = 0; i < totalPlayers - numImposters - numJesters - numdoctors - numSheriffs; i++) {
        roles.push('Crew');
    }
    for (let i = 0; i < numImposters; i++) {
        roles.push('Imposter');
    }
    for (let i = 0; i < numJesters; i++) {
        roles.push('Jester');
    }
    for (let i = 0; i < numdoctors; i++) {
        roles.push('doctor');
    }
    for (let i = 0; i < numSheriffs; i++) {
        roles.push('sheriff');
    }

    // Shuffle the roles array
    for (let i = roles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [roles[i], roles[j]] = [roles[j], roles[i]]; // Swap elements
    }


    // create new button Next
    const nextRole = document.getElementById('next-role')
    nextRole.innerHTML = '';
    nextRole.innerHTML = `<button onClick=showNext() >Next</button>`;

    // Display roles
    const roleDisplay = document.getElementById('role-display');
    roleDisplay.innerHTML = ''; // Clear any previous content
    roleDisplay.innerHTML += `<p>Player 1: ${roles[1]}</p>`;
    /*roles.forEach((role, index) => {
        roleDisplay.innerHTML += `<p>Player ${index + 1}: ${role}</p>`;
    });*/

    // Display the role of the current player (for demonstration, we'll use a fixed index)
    const currentPlayerIndex = 0; // Example index for the current player
    const currentRole = roles[currentPlayerIndex];
    const resultDiv = document.getElementById('result');

    // Display the role and set the text color
    if (currentRole === 'Imposter') {
        resultDiv.textContent = 'You are the imposter!';
        resultDiv.style.color = 'red';
    } else if (currentRole === 'Jester') {
        resultDiv.textContent = 'You are the jester!';
        resultDiv.style.color = 'purple';
    } else if (currentRole === 'doctor') {
        resultDiv.textContent = 'You are the doctor!';
        resultDiv.style.color = 'blue';
    } else {
        resultDiv.textContent = 'You are a crewmate!';
        resultDiv.style.color = 'green';
    }
}

function showNext(){

}