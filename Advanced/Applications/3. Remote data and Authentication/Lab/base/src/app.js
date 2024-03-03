async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes');
    const recipes = await response.json();

    return recipes;
}

async function getRecipeById(id) {
    
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

function createRecipePreview(recipe) {
    
    const result = e('article', { className: 'preview', onClick: () => toggleCard(recipe._id) },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard(id) {
        
        const fullRecipe = await getRecipeById(id);

        const c = document.querySelector(".open")
        if (c) {
            c.classList.remove("open");
            const recipe = await getRecipeById(c.dataset.id)
            c.replaceWith(createRecipePreview(recipe));
        }

        result.replaceWith(createRecipeCard(fullRecipe));
    }
}

function createRecipeCard(recipe) {
    const result = e('article', {},
    e('h2', {}, recipe.name),
    e('div', { className: 'band' },
        e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
        e('div', { className: 'ingredients' },
            e('h3', {}, 'Ingredients:'),
            e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
        )
    ),
    e('div', { className: 'description' },
        e('h3', {}, 'Preparation:'),
        recipe.steps.map(s => e('p', {}, s))
    ),
);

    result.dataset.id = recipe._id
    result.classList.add("open")
    return result;
}

async function checkUser() {
    const userData = sessionStorage.getItem("user");

    if(userData) {
        document.getElementById("logoutBtn").addEventListener("click", logout)
        document.getElementById("user").style.display = "inline-block"
    } else {
        document.getElementById("guest").style.display = "inline-block";
    }
}

function logout(e) {
    e.preventDefault();
    sessionStorage.removeItem("user");
    window.location = "index.html"
}

window.addEventListener('load', async (ev) => {
    ev.preventDefault();
    checkUser();

    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    cards.forEach((c, ind) => {
        c.dataset.recipeId = recipes[ind]._id
        main.appendChild(c)
    });
});

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}