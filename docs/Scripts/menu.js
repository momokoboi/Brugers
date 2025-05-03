
// add inline styles when pictures are clicked.

function addInlineStyles(){

    const menuWrapperELement = document.querySelector(".menu_wrapper").style.height = "auto";

    const menuWrapperTITLE = document.querySelector(".menu_wrapper h1").style.display = 'none';

    const imageWrapperEL = document.querySelector(".img_wrapper").style.display = 'flex';

    const infoWrapperEL = document.querySelector(".info_wrapper").style.display = 'flex';
}

async function changeData(){

    const response = await fetch("./Json_files/Luxury_Burgers.json");
    const data = await response.json();
    console.log(data);
    const ingredientsArray = data.map(item => item.ingredients);
    console.log(ingredientsArray);

    const schwarwEL = document.querySelector(".w1");
    const bernsteinEL = document.querySelector(".w2");
    const vulkanEL = document.querySelector(".w3");
    const BlauEL = document.querySelector(".w4");

    let titleEL = document.querySelector(".title");
    let descriptionEL = document.querySelector(".description");
    let alergensEL = document.querySelector(".alergens");
    let caloriesEL = document.querySelector(".calories");
    let priceEL = document.querySelector(".price");
    let ingredientsEL = document.querySelector(".ingredients");
    let imgEL = document.querySelector(".img_wrapper img");

    [schwarwEL, bernsteinEL, vulkanEL, BlauEL].forEach(element => {
        element.addEventListener("click", addInlineStyles);
    });

    schwarwEL.addEventListener("click", () => {
        console.log("Schwarw clicked");
        const burgerData = data.find(item => item.name === "Der Schwarzwald-König");
        if (burgerData) {
            titleEL.textContent = burgerData.name;
            descriptionEL.textContent = burgerData.description;
            alergensEL.textContent = `Alergens: ${burgerData.allergens}`;
            caloriesEL.textContent = `Calories: ${burgerData.calories}`;
            priceEL.textContent = `${burgerData.price}`;
            imgEL.src = burgerData.image; // Set the image source
            imgEL.alt = burgerData.name; // Set the alt text for the image
            
            // Clear existing ingredients
            ingredientsEL.innerHTML = "";
            
            // Add new ingredients as list items
            burgerData.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsEL.appendChild(li);
            });
        }else {
            console.error("Burger data not found for Schwarzwald-König");
        }
    });

    bernsteinEL.addEventListener("click", () => {
        console.log("Bernstein clicked");
        // Add your logic here
        const burgerData = data.find(item => item.name === "Der Bernstein-Burger");
        if (burgerData) {
            titleEL.textContent = burgerData.name;
            descriptionEL.textContent = burgerData.description;
            alergensEL.textContent = `Alergens: ${burgerData.allergens}`;
            caloriesEL.textContent = `Calories: ${burgerData.calories}`;
            priceEL.textContent = `${burgerData.price}`;
            imgEL.src = burgerData.image; // Set the image source
            imgEL.alt = burgerData.name; // Set the alt text for the image
            
            // Clear existing ingredients
            ingredientsEL.innerHTML = "";
            
            // Add new ingredients as list items
            burgerData.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsEL.appendChild(li);
            });
        }else {
            console.error("Burger data not found for Der Bernstein-Burger");
        }
    });

    vulkanEL.addEventListener("click", () => {
        console.log("Vulkan clicked");
        // Add your logic here
        const burgerData = data.find(item => item.name === "Der Vulkan-Burger");
        if (burgerData) {
            titleEL.textContent = burgerData.name;
            descriptionEL.textContent = burgerData.description;
            alergensEL.textContent = `Alergens: ${burgerData.allergens}`;
            caloriesEL.textContent = `Calories: ${burgerData.calories}`;
            priceEL.textContent = `${burgerData.price}`;
            imgEL.src = burgerData.image; // Set the image source
            imgEL.alt = burgerData.name; // Set the alt text for the image
            
            
            // Clear existing ingredients
            ingredientsEL.innerHTML = "";
            
            // Add new ingredients as list items
            burgerData.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsEL.appendChild(li);
            });
        }else {
            console.error("Burger data not found for Der Vulkan-Burger");
        }
    });

    BlauEL.addEventListener("click", () => {
        console.log("Blau clicked");
        // Add your logic here
        const burgerData = data.find(item => item.name === "Der Blaue Baron");
        if (burgerData) {
            titleEL.textContent = burgerData.name;
            descriptionEL.textContent = burgerData.description;
            alergensEL.textContent = `Alergens: ${burgerData.allergens}`;
            caloriesEL.textContent = `Calories: ${burgerData.calories}`;
            priceEL.textContent = `${burgerData.price}`;
            imgEL.src = burgerData.image; // Set the image source
            imgEL.alt = burgerData.name; // Set the alt text for the image
            
            
            // Clear existing ingredients
            ingredientsEL.innerHTML = "";
            
            // Add new ingredients as list items
            burgerData.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsEL.appendChild(li);
            });
        }else {
            console.error("Burger data not found for Der Blaue Baron");
        }
    });

    
}


document.addEventListener("DOMContentLoaded", () => {
    changeData();
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