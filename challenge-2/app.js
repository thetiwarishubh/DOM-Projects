const mainHeading = document.getElementById('mainHeading');
const colorsButtons = document.querySelector('.color-buttons');

colorsButtons.addEventListener('click', (e)=> {
    if(e.target.tagName === "BUTTON"){
        const colorId = e.target.id;
        switch(colorId){
            case 'redButton' :
            mainHeading.style.color = 'red';
            break;
            case 'purpleButton' :
            mainHeading.style.color = 'purple';
            break;
            case 'greenButton' :
            mainHeading.style.color = 'green';
            break;
            case 'blueButton' :
            mainHeading.style.color = 'blue';
            break;
            default :
            mainHeading.style.color = 'black';
        }
    }
    
})
