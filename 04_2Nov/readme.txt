Food - OnlineShop

## Name
DA CRUST

## Description
This is a Food Shop with Online Order and Delivey. The site has an active nav bar with home page, menu, online order, admin and contact.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

License
For open source projects, say how it is licensed.

Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.


!TO DO LIST 👍 -Description
-la click pe "Contact" din navbar sa se adauge clasa "selected" si sa se stearga de pe celelalte elemente
-pe pagina Home:    - am activ navbar
                    - am activ buton "order online" (de 3 ori)
                    - am activ buton 'full menu'
                    - am activ buton 'submit'
    -navbar:    -home
                -menu(la click deschide pagina menu.html )
                -order-online(la click deschide pagina order-online.html )
                -admin(la click deschide pagina admin.html )
                -contact(la click te duce la contact in josul paginii (smooth scrolling) )
    -css animation la numele site-ului(span+hover)
    -css animation la butoanele active(hover)
    -css shadow la font-awesome instructions
    -css opacity la unele poze-link(hover)
    -css animation pe social media icons(hover)
    -click pe social media icons links
    -click pe submit
    -!trebuie facuta reponsive!!! :video : https://www.youtube.com/watch?v=X9M81E4yh6A&list=PLvswnrH5VtErL7RlhLysnLSM9zzks_gHg&index=17&t=884s&ab_channel=CodewithErum (min 35)
-pe pagina Menu:    -lista produselor
                    -metoda AJAX fetch API (firebase) cu fisierul json local
-pe pagina Order Online:    -la click pe iconita Hi, guest apare un promt sa te loghezi cu facebookul cum???????
                            -drop down Menu list hide/show
                            -la fiecare click pe o categorie se afiseaza respectiva lista meniu
                            -la fiecare meal am buton de 'add to cart' (link cu id-ul elementului respectiv)
                            -la click pe un 'add to cart' apare acel produs in CART cu: -nume meal
                                                                            -price
                                                                            -quantity cu plus minus(se updateaza cantitatea, pretul si produsele din cos)
                                                                            -buton de remove
                            -dupa ce s-a pregatit comanda, click pe "Order now": - apare o alerta, si comanda dispare(simulare de comanda)
                            -comanda salvata in local storage(produse, cantitate(doar pt primele 2 inputuri) si total pret)
-pe pagina Details  -apare reteta produsului cu poza si nume
                    -un buton de 'back to menu'
-pe pagina Admin:   -am lista tuturor produselor
                    -buton 'add new meal' pt a adauga un produs nou in json cu POST
                    -!numele produsului este link ce editeaza produsul in json cu PUT
                    -!buton de 'remove' pt a sterge din JSON cu DELETE
-la Contact     -simulez un submit cu mesaj "thanks for submitting"
                -mesaj de completare inputs
