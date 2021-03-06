import { addFoodToStorage, getDayStorage, getUserStorage, getUserDietChoice, setDayStorage } from '../localStorage-utils.js';
import { calculateTotalCalories } from '../utils.js';
const userFood = getDayStorage();
const userData = getUserStorage();

const userStatsDiv = document.getElementById('user-info-container');
const userName = document.createElement('span');
const userCalGoal = document.createElement('span');
const userActual = document.createElement('span');
userActual.setAttribute('id', 'user-cal-span');
const userDietChoice = document.createElement('span');

export function renderFood(food) {

    const li = document.createElement('li');
    li.classList.add('food-list-item');

    const foodImage = document.createElement('img');
    foodImage.src = `../assets/${food.img}`;
    foodImage.onerror = ()=>foodImage.src = '../assets/groceries.png';
    foodImage.classList.add('food-image');

    const foodFactsDiv = document.createElement('div');
    foodFactsDiv.classList.add('food-facts');
    foodFactsDiv.innerHTML =
        `<span>${food.name}</span>
        <span>${food.serving}</span>
        <span>calories: ${food.calories}</span>
        <span>protein: ${food.protein}</span>
        <span>carbohydrates: ${food.carbs}</span>`;

    li.append(foodImage, foodFactsDiv);
    li.addEventListener('click', () => {

        const updatedUserFood = getDayStorage();

        addFoodToStorage(food);

        userActual.textContent = `Current Calories:${updateUserCalories(updatedUserFood)}`;
    });
    return li;
}

export function updateUserCalories() {
    const updatedData = getDayStorage();
    const totalCals = calculateTotalCalories(updatedData);
    setDayStorage(updatedData);
    userActual.textContent = `Current Calories: ${totalCals}`;
    return totalCals;
}

export function displayUserInfo(user) {
    userName.classList.add('user-name');
    userName.textContent = `${user.firstName} ${user.lastName}`;
    
    userCalGoal.textContent = `Calorie Goal: ${user.dailyCalories}`;
    
    userActual.textContent = `Current Calories: ${calculateTotalCalories(userFood)}`;
    userDietChoice.textContent = `Diet Type: ${getUserDietChoice()}`;
    userStatsDiv.append(userName, userCalGoal, userActual, userDietChoice);
}

// seems like this should be imported elsewhere and used? I'd say t's an antipattern to call functions in global scope in a utils file like this
displayUserInfo(userData);
