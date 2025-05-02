const burgerEL = document.querySelector(".carrousel > img")
const burgernameEL = document.querySelector(".Burger_presentation h3")

const btns = document.querySelectorAll(".carrousel button")
const leftbtn = btns[0]
const rightbtn = btns[1]

leftbtn.addEventListener("click", ()=> image_title_Swap("left"))
rightbtn.addEventListener("click", ()=> image_title_Swap("right"))

// carrousel method 
let index_burger = 0
let burgers_array = []
async function fetchData(){
    try {
      // Brugers for github absolute path.
        const response = await fetch('Brugers/docs/Json_files/Burgers.json');
        const data = await response.json();
  
        data.forEach((burger)=>{
          burgers_array.push(burger)
        })

        console.log(burgers_array)
      } catch (error) {
        console.error("Fehler beim Laden der Burger-Daten:", error);
      }
}

function image_title_Swap(direction) {
  const total = burgers_array.length;
  index_burger = (direction === "right")
    ? (index_burger + 1) % total
    : (index_burger - 1 + total) % total;

  burgerEL.classList.add("fade-out");

  setTimeout(() => {
    const burger = burgers_array[index_burger];
    burgerEL.setAttribute("src", burger.image);
    burgerEL.setAttribute("alt", `${burger.name}_img`);
    burgernameEL.textContent = burger.name;

    burgerEL.classList.remove("fade-out");
    burgerEL.classList.add("fade-in");

    setTimeout(() => burgerEL.classList.remove("fade-in"), 400);
  }, 400);
}

fetchData()

const header = document.querySelector('header');
let scrollTimeout;
let isHovering = false; // Track the hovering

// Handle the mouse area enter
header.addEventListener('mouseenter', () => {
  isHovering = true;
  header.classList.remove('compact');
});

// Handle mouse area leaeve
header.addEventListener('mouseleave', () => {
  isHovering = false;
  // evaluate scroll state to check if compact class should return
  if (window.scrollY > 250) {
    header.classList.add('compact');
  }
});

// Handle scroll
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    // Only apply compact class based on scroll if not hovering
    if (!isHovering) {
      if (window.scrollY > 250) {
        header.classList.add('compact');
      } else {
        header.classList.remove('compact');
      }
    }
  }, 100);
});
