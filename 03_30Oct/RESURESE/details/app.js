const myDiv = document.getElementById('my-div');
let val = window.location.search;

window.onload = () => {
    getProducts();
    if (window.location.search !== '') {
        const id = window.location.search.split('=')[1];
        console.log(id);
        showRecipe(id);
    }
}

function getProducts() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            for (let i = 0; i < data[0].breakfast.length; i++) {
                myDiv.innerHTML += `
                    <div class="title-price">
                        <p>${data[0].breakfast[i].mealName}</p>
                        <p>${data[0].breakfast[i].mealPrice} $</p>
                    </div>
                    <small>${data[0].breakfast[i].mealDescription}</small>
                    <p><small>Preparation time - ${data[0].breakfast[i].mealPrepTime}mins</small></p>
                    <a href="details.html?id=${data[0].breakfast[i].mealId}">Details</a>
                    <hr/>
                `;
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipe(id) {
    console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            for (let i = 0; i < data[0].breakfast.length; i++) {
                const myDivDetails = document.createElement('div');

                if (id == data[0].breakfast[i].mealId) {
                    myDivDetails.innerHTML = `
                        <div class="title-price">
                            <p>${data[0].breakfast[i].mealName}</p>
                            <p>${data[0].breakfast[i].mealPrice} $</p>
                        </div>
                        <small>${data[0].breakfast[i].mealDescription}</small>
                        <p><small>Preparation time - ${data[0].breakfast[i].mealPrepTime}mins</small></p>
                        <p>Recipe: ${data[0].breakfast[i].mealRecipe}</p>
                        <hr/>
                    `;
                    document.body.appendChild(myDivDetails);
                }
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

console.log(val);