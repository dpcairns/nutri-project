// import functions and grab DOM elements
import { setUserStorage } from './localStorage-utils.js';
import { instructions } from './data.js';

const topSection = document.querySelector('.top-section');
const span = document.createElement('span');
for (let item of instructions){
    if (item.name === 'homePage'){
        span.textContent = item.description;
    }
}
topSection.classList.add('instructions');
topSection.append(span);

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formdata = new FormData(form);
    const user = {
        firstName: formdata.get('fname'),
        lastName: formdata.get('lname'),
        dailyCalories: formdata.get('calories'),
        dietChoice: formdata.get('diet-type'),
    };
    setUserStorage(user);
    window.location = './food-select';
});

var button = document.getElementById('submit');
button.addEventListener('click', function () {
    document.location.href = './food-select/index.html';
});

