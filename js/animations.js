
//adds the show class to elements when they enter view and removes it when they leave
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});

//adds observer to all elements that arent visible 
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

//when user scrolls more than 50px add scrolled class to the header, otehrwise remove scrolled class, and menu open class if the burger menu is opened
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        header.classList.remove("menu-open");
    }
});

//when the burger menu is clicked it adds open menu to the header which opens a dropdown menu to display the nav
menuToggle.addEventListener("click", () => {
    header.classList.toggle("menu-open");
});