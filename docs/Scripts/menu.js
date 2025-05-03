document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Add the compact class to the header by default
    header.classList.add("compact");

    // Remove the compact class when the header is hovered over
    header.addEventListener("mouseenter", () => {
        header.classList.remove("compact");
    });

    // Add the compact class back when the mouse leaves the header
    header.addEventListener("mouseleave", () => {
        header.classList.add("compact");
    });
});