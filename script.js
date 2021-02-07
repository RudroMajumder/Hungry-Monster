const itemDivHandler = () =>{
    document.getElementById('meals').innerHTML = '';
    document.getElementById('meal-details').innerHTML = '';
    document.getElementById('meal-details').style.display = "none";
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
            const mealDetail= document.getElementById('meal-details');
             mealDetail.innerHTML = `
                <img src =" ${data.strMealThumb}" width="700px" style="margin:40px;" align="center">
                    <h1 style ="font-size: 30px;
                    font-weight: bold;"> ${data.strMeal} </h2>
                    <h3 style ="font-size: 30px;
                    font-weight: bold;align:left;"> Ingredients </h3>
                    <ul class="ingredients">
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
                    mealDetail.className = 'ingredients';
                    document.getElementById('meal-details').style.display = "block";
                }
        }



