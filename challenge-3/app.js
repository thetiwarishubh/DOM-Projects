const userName = document.getElementById('nameInput');
const jobTitle = document.getElementById('jobInput');
const age = document.getElementById('ageInput');
const bio = document.getElementById('bioInput');


const displayName = document.getElementById('nameDisplay')
const displayJob = document.getElementById('jobDisplay')
const displayAge = document.getElementById('ageDisplay')
const displayBio = document.getElementById('bioDisplay')

const updateDisplay = (inputElement, displayElement)=> {
    inputElement.addEventListener('input', ()=> {
        displayElement.textContent = inputElement.value.trim() === ""
        ? "Not Provided"
        : inputElement.value;
    });
}

updateDisplay(userName, displayName);
updateDisplay(jobTitle, displayJob);
updateDisplay(age, displayAge);
updateDisplay(bio, displayBio);