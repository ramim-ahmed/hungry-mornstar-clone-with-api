const searchBtn = document.querySelector('.searchBtn');
const mealItem = document.querySelector('.search-meal-result');


searchBtn.addEventListener('click', getSearchValue);

mealItem.addEventListener('click', getIngredients)

function getSearchValue() {
    let searchInput = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then( res => res.json())
    .then( data =>{
        let html = '';
        if(data.meals){
            data.meals.map(meal => {
                html += `
                <div class="meal-item meals data-id = ${meal.idMeal}">
                <img src=${meal.strMealThumb} alt="" />
                <div class="details">
                  <h4>${meal.strMeal}</h4>
                  <a class="ingredientsBtn" href="#" > Ingredients </a>
                </div>
                </div>
                `
            })
            mealItem.classList.remove('not-find')
        }else{
            html = 'Sorry , We don\'t find any meal! please try again';
            mealItem.classList.add('not-find')
        }

        mealItem.innerHTML = html
    })
}

function getIngredients (e) {
 e.preventDefault();
 if(e.target.classList.contains('ingredientsBtn')){
    let mealList = e.target.parentElement.parentElement;
   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52878`)
   .then(res => res.json())
   .then( data => {
       console.log(data);
   })
}
}