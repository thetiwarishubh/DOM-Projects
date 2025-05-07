const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('status');
const bodyText = document.getElementById('body');
const bulb = document.getElementById('bulb');

let bulbValue = false;

toggleButton.addEventListener('click', ()=> {
    if(!bulbValue){
        bulb.style.backgroundColor = '#f1c40f';
        bodyText.style.backgroundColor = '#333';
        bodyText.style.color = '#ffffff';
        statusText.innerHTML = 'Status: On';
        toggleButton.innerHTML = 'Turn Off';
        bulbValue = true;
    } else {
        bulb.style.backgroundColor = '';
        bodyText.style.backgroundColor = '';
        bodyText.style.color = '';
        statusText.innerHTML = 'Status: Off';
        toggleButton.innerHTML = 'Turn On';
        bulbValue = false;
    }
})
