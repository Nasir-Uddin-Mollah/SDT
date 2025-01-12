document.getElementById('btn').addEventListener('click', () => {
    let searchitem = document.getElementById('searchbox').value;
    const details = document.getElementById('details');
    details.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchitem}`)
        .then(res => res.json())
        .then(data => {
            displayItems(data);
        })
});
const displayItems = (data) => {
    const items = document.getElementById('items');
    items.innerHTML = '';
    if (data.meals == null) {
        document.getElementById('message').style.display = 'block';
    }
    else {
        document.getElementById('message').style.display = 'none';
        data.meals.forEach(meal => {
            const itemdiv = document.createElement('div');
            itemdiv.classList.add('item', 'm-3');
            itemdiv.setAttribute('onclick', `details(${meal.idMeal})`);
            itemdiv.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                </div>
            </div>
            `;
            items.appendChild(itemdiv);
        });
    }
};

const details = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            console.log(meal);
            const details = document.getElementById('details');
            details.innerHTML = '';
            const detaildiv = document.createElement('div');
            detaildiv.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <h6>Ingredients</h6>
                    <ul class="list-unstyled">
                        <li>${meal.strIngredient1}</li>
                        <li>${meal.strIngredient2}</li>
                        <li>${meal.strIngredient3}</li>
                        <li>${meal.strIngredient4}</li>
                        <li>${meal.strIngredient5}</li>
                        <li>${meal.strIngredient6}</li>
                        <li>${meal.strIngredient7}</li>
                        <li>${meal.strIngredient8}</li>
                        <li>${meal.strIngredient9}</li>
                        <li>${meal.strIngredient10}</li>
                    </ul>
                </div>
            </div>
            `;
            details.appendChild(detaildiv);
        })
};