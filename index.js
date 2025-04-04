
const roles = [];
let currRole = 0;
let globalPlayers;

function generateRole() {
    // Get the total number of players from the input field
    currRole = 0;
    const totalPlayers = parseInt(document.getElementById('total-players').value, 10);

    // Ensure there are at least 3 players and enough roles
    if (totalPlayers < 3) {
        alert('There must be at least 3 players.');
        return;
    }

    const numImposters = 1; // Number of Imposters
    const numJesters = 1; // Number of jesters
    const numDoctors = 1; // Number of doctors
    const numSheriffs = 1; // Number of sheriffs
    const numJanitors = 1; // Number of Janitors

    // Ensure there are more players than the total roles
    if (totalPlayers <= numImposters + numJesters + numSheriffs + numDoctors + numJanitors) {
        alert('There must be more players than imposters, jesters, doctors, sheriffs, and janitors combined.');
        return;
    }

    // Create an array of roles
    for (let i = 0; i < totalPlayers - numImposters - numJesters - numDoctors - numSheriffs - numJanitors; i++) {
        roles.push('Crew');
    }
    for (let i = 0; i < numImposters; i++) {
        roles.push('Imposter');
    }
    for (let i = 0; i < numJesters; i++) {
        roles.push('Jester');
    }
    for (let i = 0; i < numDoctors; i++) {
        roles.push('Doctor');
    }
    for (let i = 0; i < numSheriffs; i++) {
        roles.push('Sheriff');
    }
    for (let i = 0; i < numJanitors; i++) {
        roles.push('Janitor'); // Fixed typo (Janiter -> Janitor)
    }

    // Shuffle the roles array
    for (let i = roles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [roles[i], roles[j]] = [roles[j], roles[i]]; // Swap elements
    }

    // Create new button for Next
    const nextRole = document.getElementById('next-role');
    nextRole.innerHTML = '';
    nextRole.innerHTML = `<button onClick="showNext()">Next</button>`;

    // Display the first role
    const roleDisplay = document.getElementById('role-display');
    roleDisplay.innerHTML = ''; // Clear previous content
    roleDisplay.innerHTML += `<p>Player ${currRole + 1}: ${roles[currRole]}</p>`;

    // Display the role of the current player
    const currentRole = roles[currRole];
    const resultDiv = document.getElementById('result');

    // Display the role and set the text color
    if (currentRole === 'Imposter') {
        resultDiv.textContent = 'You are the imposter!';
        resultDiv.style.color = 'red';
    } else if (currentRole === 'Jester') {
        resultDiv.textContent = 'You are the jester!';
        resultDiv.style.color = 'purple';
    } else if (currentRole === 'Doctor') {
        resultDiv.textContent = 'You are the doctor!';
        resultDiv.style.color = 'blue';
    } else if (currentRole === 'Janitor') {
        resultDiv.textContent = 'You are the Janitor!';
        resultDiv.style.color = 'yellow';
    } else {
        resultDiv.textContent = 'You are a crewmate!';
        resultDiv.style.color = 'green';
    }

    globalPlayers = totalPlayers; // Save total players for later use
}

// The function that is called when the "Next" button is clicked
function showNext() {
    console.log("Global players: " + globalPlayers);
    console.log("CurrRole: " + currRole);

    // Check if all players' roles have been displayed
    if (currRole >= globalPlayers - 1) {
        const nextDiplay = document.getElementById("next-role");
        nextDiplay.innerHTML = '';
        const roleDisplay = document.getElementById("role-display");
        roleDisplay.innerHTML = '';
        return;
    }

    // Display the next player's role
    const roleDisplay = document.getElementById("role-display");
    currRole++;
    roleDisplay.innerHTML = ''; // Clear previous content
    roleDisplay.innerHTML += `<p>Player ${currRole + 1}: ${roles[currRole]}</p>`;
}
