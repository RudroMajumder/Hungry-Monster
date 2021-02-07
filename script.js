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
    .then( data => showMealInfo(data.meals[0]));
        const showMealInfo = data =>{
            const mealDetail= document.createElement('section');
            mealDetail.innerHTML = "";
            mealDetail.className = 'info-section'
            const mealDetailDiv = document.createElement('div');
            mealDetailDiv.className = 'meal-item';
            const mealIngredient = `
                <img src =" ${data.strMealThumb}" width="300px">
                    <h2 style ="font-size: 20px;
                    font-weight: bold;"> ${data.strMeal} </h2>
                    <h3 style ="font-size: 20px;
                    font-weight: bold;"> Ingredients </h3>
                    <ul>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure1} ${data.strIngredient1}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure2} ${data.strIngredient2}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure3} ${data.strIngredient3}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure4} ${data.strIngredient4}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure5} ${data.strIngredient5}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure6} ${data.strIngredient6}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure7} ${data.strIngredient7}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure8} ${data.strIngredient8}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure9} ${data.strIngredient9}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure10} ${data.strIngredient10}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure11} ${data.strIngredient11}</li>
                        <li style ="font-size: 20px;
                        font-weight: bold;"> ${data.strMeasure12} ${data.strIngredient12}</li>
                    </ul>
                    `;
                     mealIngredient.className = 'ingredients';
                    mealDetailDiv.innerHTML = mealIngredient;
                    document.body.appendChild(mealDetailDiv);
                    // console.log(mealDetailDiv);
                    // mealDetailDiv.style.display = 'inline-block';

                }
        }



