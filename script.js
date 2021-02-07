const itemDivHandler = () =>{
    document.getElementById('meals').innerHTML = '';
    const item = document.getElementById('item').value;
    const itemName = item.length;
    if( itemName == 1){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${item}`)
        .then( res =>res.json())
        .then( data => showMeal(data.meals));
        const showMeal = data => {
        showItem(data);
        return data;
        }
    }

    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then( res =>res.json())
        .then( data => showMeal(data.meals));
        const showMeal = data => {
        showItem(data);
        return data;
        }   
        
    }
}

function showItem(data) {
    const mealItems = document.getElementById('meals');
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element);
            const mealDiv = document.createElement('div');
            mealDiv.className = 'meal';
            mealDiv.id = 'meal-item';
            const mealInfo = `
                <div onclick="showInfo('${element.idMeal}')">
                    <img src= "${element.strMealThumb}" class="meal-image" >
                    <h4 id="item-name" > ${element.strMeal} </h4>
                </div>
            `;
            mealDiv.innerHTML = mealInfo;
            mealItems.appendChild(mealDiv);
           
        };
    } 
const showInfo = meal =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
    .then( res =>res.json())
    .then( data => showMealInfo(data.meals));
        const showMealInfo = data =>{
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                const ingredient = [
                    element.strMeasure1 + ' ' +element.strIngredient1,
                    element.strMeasure2 + ' ' +element.strIngredient2,
                    element.strMeasure3 + ' ' +element.strIngredient3,
                    element.strMeasure4 + ' ' +element.strIngredient4,
                    element.strMeasure5 + ' ' +element.strIngredient5,
                    element.strMeasure6 + ' ' +element.strIngredient6,
                    element.strMeasure7 + ' ' +element.strIngredient7,
                    element.strMeasure8 + ' ' +element.strIngredient8,
                    element.strMeasure9 + ' ' +element.strIngredient9,
                    element.strMeasure10 + ' ' +element.strIngredient10,
                    element.strMeasure11 + ' ' +element.strIngredient11,
                    element.strMeasure12 + ' ' +element.strIngredient12,
                    element.strMeasure13 + ' ' +element.strIngredient13,
                    element.strMeasure14 + ' ' +element.strIngredient14,
                    element.strMeasure15 + ' ' +element.strIngredient15,
                    element.strMeasure16 + ' ' +element.strIngredient16,
                    element.strMeasure17 + ' ' +element.strIngredient17,
                    element.strMeasure18 + ' ' +element.strIngredient18,
                    element.strMeasure19 + ' ' +element.strIngredient19,
                    element.strMeasure20 + ' ' +element.strIngredient20,

                ]
                
                const index = ingredient.indexOf(" ");

                const allIngredients = ingredient.slice(0,index);

                console.log(allIngredients);

                for (let i = 0; i < allIngredients.length; i++) {
                    const element = allIngredients[i];
                    console.log(element);

                    const ingredientDiv = document.createElement('div');

                    const ul =document.createElement('ul');

                    const li =document.createElement('li');
                    li.className = 'ingredient-li';
                    console.log(ingredientDiv,ul,li);

                    li.innerText = element;

                    console.log(li);
                    ul.appendChild(li);


                    ingredientDiv.appendChild(ul);
                    document.body.appendChild(ingredientDiv);


                }
        }

}
}
