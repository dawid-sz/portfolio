// interactive navbar animation
let navbar = document.getElementById("main-nav");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("main-nav").offsetHeight;

let navbarLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", e => {
    scrollpos = window.scrollY; //declaring the scroll behavior
    navbarLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollpos + 150 &&
            section.offsetTop + section.offsetHeight > scrollpos + 150) {
                link.classList.add("active"); //adding the background on the button from currently viewed page
            } else {
                link.classList.remove("active"); //removing the background from the button
            }
    });
});