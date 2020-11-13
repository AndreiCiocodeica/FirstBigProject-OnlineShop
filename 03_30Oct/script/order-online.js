//-Order-Online_Page
const breakfastOnlineList = document.getElementById('order-breakfast');
const p1Title = document.getElementById('p1');
const starterOnlineList = document.getElementById('order-starter');
const p2Title = document.getElementById('p2');
const chickenOnlineList = document.getElementById('order-chicken');
const p3Title = document.getElementById('p3');
const beefOnlineList = document.getElementById('order-beef');
const p4Title = document.getElementById('p4');
const porkOnlineList = document.getElementById('order-pork');
const p5Title = document.getElementById('p5');
const lambOnlineList = document.getElementById('order-lamb');
const p6Title = document.getElementById('p6');
const seafoodOnlineList = document.getElementById('order-seafood');
const p7Title = document.getElementById('p7');
const pastaOnlineList = document.getElementById('order-pasta');
const p8Title = document.getElementById('p8');
const dessertOnlineList = document.getElementById('order-dessert');
const p9Title = document.getElementById('p9');
const drinksOnlineList = document.getElementById('order-drinks');
const p10Title = document.getElementById('p10');
const newMealOnlineList = document.getElementById('order-new-meal');
const p11Title = document.getElementById('p11');
const li1El = document.getElementById('li1');
const li2El = document.getElementById('li2');
const li3El = document.getElementById('li3');
const li4El = document.getElementById('li4');
const li5El = document.getElementById('li5');
const li6El = document.getElementById('li6');
const li7El = document.getElementById('li7');
const li8El = document.getElementById('li8');
const li9El = document.getElementById('li9');
const li10El = document.getElementById('li10');
const li11El = document.getElementById('li11');
const orderOnlineDiv = document.getElementById('order-online-div');
const orderOnlineMenuDiv = document.getElementById('order-online-menu-div');
//*Order Online page
//-dropdown menu list
function showHide() {
    let dropContent = document.querySelector('#drop-content');
    let downEl = document.getElementById('down');
    dropContent.classList.toggle('hide');
    downEl.classList.toggle('fa-flip-vertical');
}
//-show menu for online page
function showBreakfast() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li1El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].breakfast.forEach((e) => {
                breakfastOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p1Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });


}

function showStarter() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li2El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].starter.forEach((e) => {
                starterOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p2Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showChicken() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li3El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].chicken.forEach((e) => {
                chickenOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p3Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showBeef() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li4El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].beef.forEach((e) => {
                beefOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p4Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showPork() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li5El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].pork.forEach((e) => {
                porkOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p5Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showLamb() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li6El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].lamb.forEach((e) => {
                lambOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p6Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showSeafood() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li7El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].seafood.forEach((e) => {
                seafoodOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p7Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showPasta() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li8El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].pasta.forEach((e) => {
                pastaOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p8Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showDessert() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li9El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].dessert.forEach((e) => {
                dessertOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p9Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showDrinks() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li10El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].drinks.forEach((e) => {
                drinksOnlineList.innerHTML += `
                    <div class="shop-item">
                        <div class="title-price">
                            <p class="shop-item-title">${e.mealName}</p>
                            <p class="shop-item-price">${e.mealPrice} $</p>
                        </div>
                        <small>${e.mealDescription}</small>
                        <p><small>Preparation time - ${e.mealPrepTime}mins</small></p>
                        <button class="shop-item-button">Add to cart</button>
                        <hr/>
                    </div>
                `;
                p10Title.classList.remove('hidden-p');
            });
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showNewMeal() {
    //clear menu before add a new one
    clearMenu();
    //change li elements on click
    changeLiElements();
    li11El.classList.add('change-li');

    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            if (ids != 0) {
                ids.forEach((key) => {
                    if (key != 0) {
                        newMealOnlineList.innerHTML += `
                            <div class="shop-item">
                                <div class="title-price">
                                    <p>${data[key].mealName}</p>
                                    <p>${data[key].mealPrice} $</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <p><small>Preparation time - ${data[key].mealPrepTime}mins</small></p>
                                <button class="shop-item-button">Add to cart</button>
                                <hr/>
                            </div>
                        `;
                        p11Title.classList.remove('hidden-p');
                    }
                });
            }
            addEventListeners();
        })
        .catch(function (err) {
            console.log(err);
        });
}
//-clear menu
function clearMenu() {
    breakfastOnlineList.innerHTML = '';
    starterOnlineList.innerHTML = '';
    chickenOnlineList.innerHTML = '';
    beefOnlineList.innerHTML = '';
    porkOnlineList.innerHTML = '';
    lambOnlineList.innerHTML = '';
    seafoodOnlineList.innerHTML = '';
    pastaOnlineList.innerHTML = '';
    dessertOnlineList.innerHTML = '';
    drinksOnlineList.innerHTML = '';
    newMealOnlineList.innerHTML = '';
    hideTitles();
}
//-hide all categories titles
function hideTitles() {
    p1Title.classList.add('hidden-p');
    p2Title.classList.add('hidden-p');
    p3Title.classList.add('hidden-p');
    p4Title.classList.add('hidden-p');
    p5Title.classList.add('hidden-p');
    p6Title.classList.add('hidden-p');
    p7Title.classList.add('hidden-p');
    p8Title.classList.add('hidden-p');
    p9Title.classList.add('hidden-p');
    p10Title.classList.add('hidden-p');
    p11Title.classList.add('hidden-p');
}
//-click on special request to show input
function specialRequest() {
    let dropInput = document.getElementById('drop-input');

    if (dropInput.style.display === "none") {
        dropInput.style.display = "block";
    }
    else {
        dropInput.style.display = "none";
    }
}
//-change li elements on click
function changeLiElements() {
    li1El.classList.remove('change-li');
    li2El.classList.remove('change-li');
    li3El.classList.remove('change-li');
    li4El.classList.remove('change-li');
    li5El.classList.remove('change-li');
    li6El.classList.remove('change-li');
    li7El.classList.remove('change-li');
    li8El.classList.remove('change-li');
    li9El.classList.remove('change-li');
    li10El.classList.remove('change-li');
    li11El.classList.remove('change-li');
}
//-add to cart & order now
//-add events for all remove buttons
let removeCartItemBtns = document.getElementsByClassName('btn-danger');
for (let i = 0; i < removeCartItemBtns.length; i++) {
    let button = removeCartItemBtns[i];
    button.addEventListener('click', removeCartItem);
}
//- add events for add to cart buttons
function addEventListeners() {
    let addToCartBtns = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCartBtns.length; i++) {
        let button = addToCartBtns[i];
        button.addEventListener('click', addToCartClicked);
    }
}
//-add events for minus and plus btns
function addEventsToMinusBtns() {
    let quantityInputsMinus = document.getElementsByClassName('btn-input-minus');
    for (let i = 0; i < quantityInputsMinus.length; i++) {
        let minusBtn = quantityInputsMinus[i];
        minusBtn.addEventListener('click', quantityChangedMinus);
    }
}
function addEventsToPlusBtns() {
    let quantityInputsPlus = document.getElementsByClassName('btn-input-plus');
    for (let i = 0; i < quantityInputsPlus.length; i++) {
        let plusBtn = quantityInputsPlus[i];
        plusBtn.addEventListener('click', quantityChangedPlus);
    }
}
//-add event when 'Order Now' is clicked
document.getElementById('btn-purchase').addEventListener('click', purchaseClicked);
//function for purchase items
function purchaseClicked() {
    let cartItems = document.getElementsByClassName('cart-items')[0];
    //if cart is not empty
    if (cartItems.hasChildNodes()) {
        alert("Thank you for your purchase");
    }
    else {
        alert("Please add items to cart!")
    }
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    //clear number of items from cart
    document.getElementById('nr-of-items').innerHTML = 0;
    count = 0;
    //return cart logo
    document.querySelector('.order-logo').style.display = 'block';
    updateCartTotal();
}
//remove function
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    //-update nr of items from cart(count)
    let plusBtn = buttonClicked.previousElementSibling;
    let quantityElem = plusBtn.previousElementSibling;
    let countData = document.getElementById('nr-of-items');
    let currentCount = countData.innerHTML;
    let cartItems = document.getElementsByClassName('cart-items')[0];
    if (!cartItems.hasChildNodes()) {
        const orderLogoDiv = document.querySelector('.order-logo');
        orderLogoDiv.style.display = 'block';
        count = 0;
    }
    count = currentCount - quantityElem.value;
    countData.innerHTML = count;
    //-message item removed from cart
    messageItemRemoved();
}
//quantity changed minus
let value;
function quantityChangedMinus(event) {
    let minus = event.target;
    let inputQuantity = minus.nextElementSibling;
    value = parseInt(inputQuantity.value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
        value--;
        howManyClicksOnRemove();
    }
    inputQuantity.value = value;
    updateCartTotal();

}
//quantity changed plus
function quantityChangedPlus(event) {
    let plus = event.target;
    let inputQuantity = plus.previousElementSibling;
    value = parseInt(inputQuantity.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    inputQuantity.value = value;
    updateCartTotal();
    howManyClicksOnAdd();
}
//function add to cart buttons
function addToCartClicked(event) {
    //clear Order logo div
    clearOrderLogoDiv();
    let button = event.target;
    let shopItem = button.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerHTML;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    // console.log(title);
    addItemToCart(title, price);
    updateCartTotal();
}
//function add items to cart
function addItemToCart(title, price) {
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    let countData = document.getElementById('nr-of-items');
    currentCount = countData.innerText;
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart');
            countData.innerText = currentCount;//if not, 1 item would be added to click count
            return;
        }
    }
    let cartRowContents = `
        <div class="cart-item">
            <p class="cart-item-title">${title}</p>
        </div>
        <span class="cart-price">${price}</span>
        <div class="cart-quantity">
            <button class="btn-input-minus">-</button>
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-input-plus">+</button>
            <button class="btn-danger">x</button>
        </div>
    `;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    //message that alerts item added
    messageNewItemAdded();
    //how many clicks on this button
    howManyClicksOnAdd();
    //add events for minus btns
    addEventsToMinusBtns();
    addEventsToPlusBtns();
}
//change total price depending on items quantity
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElem = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElem = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElem.innerText.replace('$', ''));
        let quantity = quantityElem.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-subtotal-price')[0].innerText = total;
}
//-clear Order logo div
function clearOrderLogoDiv() {
    const orderLogoDiv = document.querySelector('.order-logo');
    orderLogoDiv.style.display = 'none';
}
//-how many items in cart
let count = 0;
//on add items
function howManyClicksOnAdd() {
    count = count + 1;
    let countData = document.getElementById('nr-of-items');
    countData.innerHTML = count;
}
//on remove items
function howManyClicksOnRemove() {
    let countData = document.getElementById('nr-of-items');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    //if count is < 1, don't count!!
    if (count > 1) {
        count = count - 1;
    }
    //if cart is empty show the cart logo
    if (!cartItems.hasChildNodes()) {
        const orderLogoDiv = document.querySelector('.order-logo');
        orderLogoDiv.style.display = 'block';
        count = 0;
    }
    countData.innerHTML = count;
}
//alerts new item added
function messageNewItemAdded() {
    let messageItemAdded = document.createElement('p');
    messageItemAdded.className = 'item-added';
    messageItemAdded.innerText = 'Meal Added to Cart!';
    orderOnlineDiv.insertBefore(messageItemAdded, orderOnlineMenuDiv);

    setTimeout(() => {
        messageItemAdded.remove();
    }, 3000);
}
//alerts item removed
function messageItemRemoved() {
    let messageItemRemoved = document.createElement('p');
    messageItemRemoved.className = 'item-removed';
    messageItemRemoved.innerText = 'Meal Removed from Cart!';
    orderOnlineDiv.insertBefore(messageItemRemoved, orderOnlineMenuDiv);

    setTimeout(() => {
        messageItemRemoved.remove();
    }, 3000);
}
//local storage the order
// sa ma leg de cartRows.length si cartRows
function saveToLS() {

}
//load on page onload
function loadFromLS() {

}
