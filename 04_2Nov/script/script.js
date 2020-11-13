//-Declaration of variables
//-Home_page
const homePageBtn = document.getElementById('home-page-btn');
const menuPageBtn = document.getElementById('menu-page-btn');
const orderPageBtn = document.getElementById('order-page-btn');
const adminPageBtn = document.getElementById('admin-page-btn');
const contactPageBtn = document.getElementById('contact-page-btn');
//*Home page
//-On navbar's element "Contact" click event, add 'selected' class and remove the class from others
contactPageBtn.addEventListener('click', () => {
    contactPageBtn.classList.add('selected');
    adminPageBtn.classList.remove('selected');
    menuPageBtn.classList.remove('selected');
    homePageBtn.classList.remove('selected');
    orderPageBtn.classList.remove('selected');
});
//-Click on LOGO - redirect to Home Page
function redirectToHomePage() {
    window.location.href = 'index.html';
}
//-Smooth Scrolling when click on 'Contact'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});









