//-Admin page
const addNewMealBtn = document.getElementById('add-new-meal');
const breakfastMeals = document.getElementById('breakfast-meals');
const starterMeals = document.getElementById('starter-meals');
const chickenMeals = document.getElementById('chicken-meals');
const beefMeals = document.getElementById('beef-meals');
const porkMeals = document.getElementById('pork-meals');
const lambMeals = document.getElementById('lamb-meals');
const seafoodMeals = document.getElementById('seafood-meals');
const pastaMeals = document.getElementById('pasta-meals');
const dessertMeals = document.getElementById('dessert-meals');
const drinksMeals = document.getElementById('drinks-meals');
const newMealMeals = document.getElementById('new-meal-meals');
const managementDiv = document.getElementById('management-div');
const allMealsDiv = document.getElementById('all-meals-div');
const addNewMealDiv = document.getElementById('add-new-meal-div');
const newMealPicture = document.getElementById('new-meal-picture');
const newMealName = document.getElementById('new-meal-name');
const newMealDescription = document.getElementById('new-meal-description');
const newMealPrice = document.getElementById('new-meal-price');
const newMealStock = document.getElementById('new-meal-stock');
const newMealPrepTime = document.getElementById('new-meal-prep-time');
const newMealRecipe = document.getElementById('new-meal-recipe');
const newMealId = document.getElementById('new-meal-id');
const newMealCategory = document.getElementById('new-meal-category');
const editMealDiv = document.getElementById('edit-meal-div');
const editMealPicture = document.getElementById('edit-meal-picture');
const editMealName = document.getElementById('edit-meal-name');
const editMealDescription = document.getElementById('edit-meal-description');
const editMealPrice = document.getElementById('edit-meal-price');
const editMealStock = document.getElementById('edit-meal-stock');
const editMealPrepTime = document.getElementById('edit-meal-prep-time');
const editMealRecipe = document.getElementById('edit-meal-recipe');
const editMealId = document.getElementById('edit-meal-id');
const editMealCategory = document.getElementById('edit-meal-category');

//*Admin page
//-show all meals with GET - onload event
function showAllMeals() {
    getAllMealsInBreakfastFromAPI();
    getAllMealsInStarterFromAPI();
    getAllMealsInChickenFromAPI();
    getAllMealsInBeefFromAPI();
    getAllMealsInPorkFromAPI();
    getAllMealsInLambFromAPI();
    getAllMealsInSeafoodFromAPI();
    getAllMealsInPastaFromAPI();
    getAllMealsInDessertFromAPI();
    getAllMealsInDrinksFromAPI();
    getAllMealsInNewMealFromAPI();
    //pentru a afisa respectivele informatii produs la click pe produs
    if (window.location.search !== '') {
        let val = window.location.search;
        const id = val.split('=')[1];
        // console.log(id);
        showEditMealDiv();
        editMeal(id);
    }
}

async function getAllMealsInBreakfastFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].breakfast.forEach((e) => {
        breakfastMeals.innerHTML += `
            <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete" id="${e.mealId}" onclick="deleteMealFromAPI(this.id);return false;">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInStarterFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].starter.forEach((e) => {
        starterMeals.innerHTML += `
            <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInChickenFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].chicken.forEach((e) => {
        chickenMeals.innerHTML += `
            <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInBeefFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].beef.forEach((e) => {
        beefMeals.innerHTML += `
             <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInPorkFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].pork.forEach((e) => {
        porkMeals.innerHTML += `
            <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInLambFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].lamb.forEach((e) => {
        lambMeals.innerHTML += `
            <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInSeafoodFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].seafood.forEach((e) => {
        seafoodMeals.innerHTML += `
            <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInPastaFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].pasta.forEach((e) => {
        pastaMeals.innerHTML += `
            <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInDessertFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].dessert.forEach((e) => {
        dessertMeals.innerHTML += `
             <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInDrinksFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    data[0].drinks.forEach((e) => {
        drinksMeals.innerHTML += `
            <tr>
                <td><img src="${e.mealPicture}"></td>
                <td><a href="admin.html?id=${e.mealId}" class="meal-edit">${e.mealName}</a></td>
                <td>${e.mealPrice} $</td>
                <td>${e.mealStock}</td>
                <td><a href="" class="btn-x delete">Remove</a></td>
            </tr>
        `;
    });
}

async function getAllMealsInNewMealFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    if (ids != 0) {
        ids.forEach((key) => {
            if (key != 0) {
                newMealMeals.innerHTML += `
                    <tr>
                        <td><img src="${data[key].mealPicture}"></td>
                        <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                        <td>${data[key].mealPrice} $</td>
                        <td>${data[key].mealStock}</td>
                        <td><a href="" class="btn-x delete">Remove</a></td>
                    </tr>
                `;
            }
        });
    }
}
//-'add new meal' function for button 'add new meal' - show hidden div
function showAddNewMealDiv() {
    addNewMealDiv.classList.add('show-div-block');
    managementDiv.classList.add('hide-div');
    allMealsDiv.classList.add('hide-div');
    managementDiv.classList.remove('show-div-flex');
    allMealsDiv.classList.remove('show-div-flex');
}
//-button 'cancel' from add new meal div go back to meals list
function goBackToMealsList() {
    addNewMealDiv.classList.remove('show-div-block');
    managementDiv.classList.remove('hide-div');
    allMealsDiv.classList.remove('hide-div');
    managementDiv.classList.add('show-div-flex');
    allMealsDiv.classList.add('show-div-flex');
    window.location = 'admin.html';
}
//-function clear inputs on save is clicked
function clearNewMealInputs() {
    newMealName.value = '';
    newMealPrice.value = '';
    newMealPicture.value = '';
    newMealDescription.value = '';
    newMealStock.value = '';
    newMealPrepTime.value = '';
    newMealRecipe.value = '';
    newMealId.value = '';
    newMealCategory.value = '';
}
//-button 'save' add new meal with POST
async function addNewMealInAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json', {
        method: 'POST',
        body: JSON.stringify({
            mealName: newMealName.value,
            mealPrice: newMealPrice.value,
            mealPicture: newMealPicture.value,
            mealDescription: newMealDescription.value,
            mealStock: newMealStock.value,
            mealPrepTime: newMealPrepTime.value,
            mealRecipe: newMealRecipe.value,
            mealId: newMealId.value,
            mealCategory: newMealCategory.value
        }),
    });
    const data = await res.json();
    console.log(data);
    clearNewMealInputs();
    mealAddedMessage();
}
//show meal added message
function mealAddedMessage() {
    let addNewMealHeader = document.querySelector('.add-new-meal-header');
    let messageMealAdded = document.createElement('p');
    messageMealAdded.className = 'item-added';
    messageMealAdded.innerText = 'New Meal Added!';
    addNewMealDiv.insertBefore(messageMealAdded, addNewMealHeader);

    setTimeout(() => {
        messageMealAdded.remove();
    }, 3000);
}
//-edit meal with PUT by ID on button save(by ID)
function editMealInAPI() {
    if (window.location.search !== '') {
        let val = window.location.search;
        const id = val.split('=')[1];
        // console.log(id);
        editMealBreakfastInAPI(id);
        editMealStarterInAPI(id);
        editMealChickenInAPI(id);
        editMealBeefInAPI(id);
        editMealPorkInAPI(id);
        editMealLambInAPI(id);
        editMealSeafoodInAPI(id);
        editMealPastaInAPI(id);
        editMealDessertInAPI(id);
        editMealDrinksInAPI(id);
        editMealNewMealsAddedInAPI();
    }
    mealEditedMessage();
}
//breakfast meals
function editMealBreakfastInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//starter meals
function editMealStarterInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/starter.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/starter/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//chicken meals
function editMealChickenInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/chicken.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/chicken/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//beef meals
function editMealBeefInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/beef.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/beef/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//pork meals
function editMealPorkInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pork.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pork/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//lamb meals
function editMealLambInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/lamb.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/lamb/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//seafood meals
function editMealSeafoodInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/seafood.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/seafood/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//pasta meals
function editMealPastaInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pasta.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pasta/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//dessert meals
function editMealDessertInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/dessert.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/dessert/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//drinks meals
function editMealDrinksInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/drinks.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/drinks/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//new meals added
function editMealNewMealsAddedInAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            if (ids != 0) {
                ids.forEach(async (key) => {
                    // console.log(key);
                    if (key != 0) {
                        const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/' + key + '.json', {
                            method: 'PUT',
                            body: JSON.stringify({
                                mealName: editMealName.value,
                                mealPrice: editMealPrice.value,
                                mealPicture: editMealPicture.value,
                                mealDescription: editMealDescription.value,
                                mealStock: editMealStock.value,
                                mealPrepTime: editMealPrepTime.value,
                                mealRecipe: editMealRecipe.value,
                                mealId: editMealId.value,
                                mealCategory: editMealCategory.value
                            }),
                        });
                        const data = await res.json();
                        // console.log(data);
                    }
                });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
//-click on names link, show edit meal div (se apeleaza cand windows.location nu e null)
function showEditMealDiv() {
    editMealDiv.classList.add('show-div-block');
    managementDiv.classList.add('hide-div');
    allMealsDiv.classList.add('hide-div');
    managementDiv.classList.remove('show-div-flex');
    allMealsDiv.classList.remove('show-div-flex');
}
//-on click, show the meal for edit(se apeleaza cand windows.location nu e null)
function editMeal(id) {
    editMealBreakfast(id);
    editMealStarter(id);
    editMealChicken(id);
    editMealBeef(id);
    editMealPork(id);
    editMealLamb(id);
    editMealSeafood(id);
    editMealPasta(id);
    editMealDessert(id);
    editMealDrinks(id);
    editMealNewMeal(id);
}
//show properties of breakfast meals
function editMealBreakfast(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].breakfast.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of starter meals
function editMealStarter(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].starter.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of chicken meals
function editMealChicken(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].chicken.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of beef meals
function editMealBeef(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].beef.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of pork meals
function editMealPork(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].pork.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of lamb meals
function editMealLamb(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].lamb.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of seafood meals
function editMealSeafood(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].seafood.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of pasta meals
function editMealPasta(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].pasta.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of dessert meals
function editMealDessert(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].dessert.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of drinks
function editMealDrinks(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].drinks.forEach((e) => {
                if (id == e.mealId) {
                    editMealName.value = e.mealName;
                    editMealPrice.value = e.mealPrice;
                    editMealPicture.value = e.mealPicture;
                    editMealDescription.value = e.mealDescription;
                    editMealStock.value = e.mealStock;
                    editMealPrepTime.value = e.mealPrepTime;
                    editMealRecipe.value = e.mealRecipe;
                    editMealId.value = e.mealId;
                    editMealCategory.value = e.mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of new Meals added
function editMealNewMeal(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            if (ids != 0) {
                ids.forEach((key) => {
                    if (id == data[key].mealId && key != 0) {
                        editMealName.value = data[key].mealName;
                        editMealPrice.value = data[key].mealPrice;
                        editMealPicture.value = data[key].mealPicture;
                        editMealDescription.value = data[key].mealDescription;
                        editMealStock.value = data[key].mealStock;
                        editMealPrepTime.value = data[key].mealPrepTime;
                        editMealRecipe.value = data[key].mealRecipe;
                        editMealId.value = data[key].mealId;
                        editMealCategory.value = data[key].mealCategory;
                    }
                });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
//-button 'cancel' from edit div go back to meals list
function goBackToMealsListFromEdit() {
    editMealDiv.classList.remove('show-div-block');
    managementDiv.classList.remove('hide-div');
    allMealsDiv.classList.remove('hide-div');
    managementDiv.classList.add('show-div-flex');
    allMealsDiv.classList.add('show-div-flex');
    window.location = 'admin.html';
}
//-function clear inputs on save is clicked
function clearEditMealInputs() {
    editMealPicture.value = '';
    editMealName.value = '';
    editMealDescription.value = '';
    editMealPrice.value = '';
    editMealStock.value = '';
    editMealPrepTime.value = '';
}
//show meal edited message
function mealEditedMessage() {
    let editMealHeader = document.querySelector('.edit-meal-header');
    let messageMealEdited = document.createElement('p');
    messageMealEdited.className = 'item-added';
    messageMealEdited.innerText = 'Meal Edited!';
    editMealDiv.insertBefore(messageMealEdited, editMealHeader);

    setTimeout(() => {
        messageMealEdited.remove();
    }, 3000);
}
//!delete meal with DELETE by ID
async function deleteMealFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast/' + id + '.json', {
        method: 'DELETE'
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.log(err);
        });
}
//!delete meal message