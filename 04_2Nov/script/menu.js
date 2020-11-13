//-Menu_page
const breakfastList = document.getElementById('breakfast-list');
const starterList = document.getElementById('starter-list');
const chickenList = document.getElementById('chicken-list');
const beefList = document.getElementById('beef-list');
const porkList = document.getElementById('pork-list');
const lambList = document.getElementById('lamb-list');
const seafoodList = document.getElementById('seafood-list');
const pastaList = document.getElementById('pasta-list');
const dessertList = document.getElementById('dessert-list');
const drinksList = document.getElementById('drinks-list');
const newMealAddedList = document.getElementById('new-meal-added-list');

//*Menu_page onload function to show menu
function showMenu() {
    getBreakfastFromAPI();
    getStarterFromAPI();
    getChickenFromAPI();
    getBeefFromAPI();
    getPorkFromAPI();
    getLambFromAPI();
    getSeafoodFromAPI();
    getPastaFromAPI();
    getDessertFromAPI();
    getDrinksFromAPI();
    getNewMealAddedFromAPI();
}

function getBreakfastFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].breakfast.forEach((e) => {
                breakfastList.innerHTML += `
                    <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                            <a href="details.html?id=${e.mealId}">View Recipe</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getStarterFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].starter.forEach((e) => {
                starterList.innerHTML += `
                    <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                            <a href="details.html?id=${e.mealId}">View Recipe</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getChickenFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].chicken.forEach((e) => {
                chickenList.innerHTML += `
                    <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                            <a href="details.html?id=${e.mealId}">View Recipe</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getBeefFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].beef.forEach((e) => {
                beefList.innerHTML += `
                    <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                            <a href="details.html?id=${e.mealId}">View Recipe</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getPorkFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].pork.forEach((e) => {
                porkList.innerHTML += `
                    <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                            <a href="details.html?id=${e.mealId}">View Recipe</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getLambFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].lamb.forEach((e) => {
                lambList.innerHTML += `
                    <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                            <a href="details.html?id=${e.mealId}">View Recipe</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getSeafoodFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].seafood.forEach((e) => {
                seafoodList.innerHTML += `
                    <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                            <a href="details.html?id=${e.mealId}">View Recipe</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getPastaFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].pasta.forEach((e) => {
                pastaList.innerHTML += `
                    <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                            <a href="details.html?id=${e.mealId}">View Recipe</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getDessertFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].dessert.forEach((e) => {
                dessertList.innerHTML += `
                   <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                            <a href="details.html?id=${e.mealId}">View Recipe</a>
                        </div>
                   </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getDrinksFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].drinks.forEach((e) => {
                drinksList.innerHTML += `
                    <div class="list">
                        <img src="${e.mealPicture}">
                        <div class="list-text">
                            <p>${e.mealName}<span>........................................................</span><span>${e.mealPrice} $<span></p>
                            <small>${e.mealDescription}</small>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getNewMealAddedFromAPI() {
    // -for new items added by admin (nu merge!)
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            if (ids != 0) {
                ids.forEach(function (key) {
                    if (key != 0) {
                        newMealAddedList.innerHTML += `
                            <div class="list">
                                <img src="${data[key].mealPicture}">
                                <div class="list-text">
                                    <p>${data[key].mealName}<span>........................................................</span><span>${data[key].mealPrice} $<span></p>
                                    <small>${data[key].mealDescription}</small>
                                    <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                                </div>
                            </div>
                        `;
                    }
                });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}