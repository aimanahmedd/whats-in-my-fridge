function displayRecipes(recipes) {
    const container = document.getElementById('recipesContainer');
    container.style.display = 'flex'
    container.innerHTML = ''; // Clear previous results if needed

    const closeButton = document.createElement('img');
    closeButton.src = './images/x_button.png'; 
    closeButton.id = 'closeRecipes';
    container.appendChild(closeButton);

    for (let recipe of recipes) {
        const content = `
        <a href="${recipe.sourceUrl}" target="_blank"">     
            <div class="card">
                <div class="card-header">
                    <img src="${recipe.image}" class="cardImage">
                </div>
                <div class="card-body">
                    <h5>${recipe.title}</h5>      
                </div>
            </div>
            </a>
        `;
        container.innerHTML += content;
    }
}

const findRecipesIMG = document.createElement('img');
findRecipesIMG.src = './images/find_recipe_button.png'; 
findRecipesIMG.id = 'findRecipes';
const inputContainer = document.querySelector('.input-container');
inputContainer.appendChild(findRecipesIMG);
findRecipesIMG.addEventListener('click', () => {
const ingredients = document.getElementById('ingredientInput').value
fetch('http://localhost:3000/recipes', {
    method: 'POST', //creates a new recipe at the post request
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        ingredients: ingredients  
    })

    }).then(recipe =>{
        return recipe.json()
    })
    .then(data => {
        displayRecipes(data);
    })
    .catch(error => console.log(error))

})


document.addEventListener('DOMContentLoaded', function() {
const fridge = document.getElementById('fridge');
//const fridgeForm = document.getElementById('fridgeForm');
let isFridgeOpen = false;

if (fridge) {
    fridge.addEventListener('click', () => {
        isFridgeOpen = !isFridgeOpen;

        if (isFridgeOpen) {
            fridge.src = './images/open_fridge.png';
            fridge.classList.add('open');

        document.querySelectorAll('.food-sprite').forEach(sprite => {
            sprite.style.visibility = 'visible';
        });

        } else {
            fridge.src = './images/fridge.png';
            fridge.classList.remove('open');
            
         const fridgeRect = fridge.getBoundingClientRect(); //hiding food inside the fridge so when fridge door 
         //is closed, users won't see it
         
        let foodSprites = document.querySelectorAll('.food-sprite');
        foodSprites.forEach(sprite => {
           const spriteRect = sprite.getBoundingClientRect();

            const spriteCenterX = spriteRect.left + spriteRect.width / 2;
            const spriteCenterY = spriteRect.top + spriteRect.height / 2;

            if (
                spriteCenterX > fridgeRect.left &&
                spriteCenterX < fridgeRect.right &&
                spriteCenterY > fridgeRect.top &&
                spriteCenterY < fridgeRect.bottom
            ) {
                sprite.style.visibility = 'hidden'; // Inside fridge, hide it
            } else {
                sprite.style.visibility = 'visible'; // Outside fridge, show it
            }
        });
        
    }
    });
}

const foodSprites = document.querySelectorAll('.food-sprite');
foodSprites.forEach(function(foodSprite) {
    dragElement(foodSprite);
});
});

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

elmnt.onmousedown = dragMouseDown;

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
}
}

document.addEventListener('click', function(event) {
if (event.target && event.target.id === 'closeRecipes') {
    const container = document.getElementById('recipesContainer');
    container.style.display = 'none';
}
});