import { getUserStorage } from '../localStorage-utils.js';
import { renderFood } from './renderfood.js';
import { glutenFreeFoods, paleoFoods, vegetarianFoods } from './filter-functions.js';

const ul = document.querySelector('.food-list');
const user = getUserStorage();
const userDiet = user.dietChoice;
const paleoButton = document.getElementById('paleo-button');
const vegetarianButton = document.getElementById('vegetarian-button');
const glutenFreeButton = document.getElementById('gluten-free-button');


let dietType = [];

ul.textContent = '';

if (userDiet === 'paleo') {
    dietType = paleoFoods;
    paleoFoods.sort(function(a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
} else if (userDiet === 'vegetarian') {
    dietType = vegetarianFoods;
    vegetarianFoods.sort(function(a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
} else if (userDiet === 'gluten-free') {
    dietType = glutenFreeFoods;
    glutenFreeFoods.sort(function(a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
}

for (let iterator of dietType) {
    const foodItem = renderFood(iterator);
    ul.append(foodItem);
}

function eventHandler(e) {
    ul.textContent = '';

    if (e.target.value === 'paleo') {
        dietType = paleoFoods;
    } else if (e.target.value === 'vegetarian') {
        dietType = vegetarianFoods;
    } else if (e.target.value === 'gluten-free') {
        dietType = glutenFreeFoods;
    }

    for (let iterator of dietType) {
        const foodItem = renderFood(iterator);
        ul.append(foodItem);
    }
}
paleoButton.addEventListener('click', eventHandler);
vegetarianButton.addEventListener('click', eventHandler);
glutenFreeButton.addEventListener('click', eventHandler);


/*
---working on this
function generateSearchBar(){
    const searchInput = document.createElementElement('input');
    searchInput.setAttribute('name', 'search-input');


}
*/
