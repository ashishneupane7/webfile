document.addEventListener("DOMContentLoaded", function() {
    // Get the sections
    const aboutSection = document.getElementById("about");
    const experienceSection = document.getElementById("experience");
    const projectsSection = document.getElementById("projects");

    // Get the navigation items
    const aboutNavItem = document.querySelector('a[href="#about"]');
    const experienceNavItem = document.querySelector('a[href="#experience"]');
    const projectsNavItem = document.querySelector('a[href="#projects"]');

    // Function to add 'active' class to the navigation item
    function setActiveNavItem(section, navItem) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navItem.classList.add("active");
        } else {
            navItem.classList.remove("active");
        }
    }

    // Event listener for scrolling
    window.addEventListener("scroll", function() {
        // Add or remove 'active' class based on scroll position
        setActiveNavItem(aboutSection, aboutNavItem);
        setActiveNavItem(experienceSection, experienceNavItem);
        setActiveNavItem(projectsSection, projectsNavItem);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const lightenEffect = document.getElementById("lighten-effect");

    document.addEventListener("mousemove", function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        lightenEffect.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        lightenEffect.style.width = "50px"; // Adjust the size of the effect
        lightenEffect.style.height = "50px";
    });

    document.addEventListener("mouseleave", function() {
        lightenEffect.style.width = "0";
        lightenEffect.style.height = "0";
    });
});