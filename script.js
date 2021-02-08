const itemDivHandler = () =>{
    document.getElementById('meals').innerHTML = '';
    document.getElementById('meal-details').innerHTML = '';
    document.getElementById('alert').innerHTML = '';
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
    
    if(data == null){
        const alertContainer = document.getElementById('alert');
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert';
        const alertMessage = `
            <p class="alertMessage"> OOPS! Your Item Is Not Found </p>
        `;
        alertDiv.innerHTML = alertMessage;
        alertContainer.appendChild(alertDiv);
    }
    
            data.forEach(element => {
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
           
        });
    } 
const showInfo = meal =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
    .then( res =>res.json())
    .then( data => showMealInfo(data.meals[0]));
        const showMealInfo = data =>{
            const mealDetail= document.getElementById('meal-details');
             mealDetail.innerHTML = `
                <img src =" ${data.strMealThumb}" width="500px" style="margin:40px;" class="details-img">
                    <h1 style ="font-size: 30px;
                    font-weight: bold;"> ${data.strMeal} </h2>
                    <h3 style ="font-size: 30px;
                    font-weight: bold;align:left;"> Ingredients </h3>
                    <ul class="ingredients">
                        <li class="ingredients-list" > ${data.strMeasure1} ${data.strIngredient1}</li>
                        <li class="ingredients-list"> ${data.strMeasure2} ${data.strIngredient2}</li>
                        <li class="ingredients-list"> ${data.strMeasure3} ${data.strIngredient3}</li>
                        <li class="ingredients-list"> ${data.strMeasure4} ${data.strIngredient4}</li>
                        <li class="ingredients-list"> ${data.strMeasure5} ${data.strIngredient5}</li>
                        <li class="ingredients-list"> ${data.strMeasure6} ${data.strIngredient6}</li>
                        <li class="ingredients-list"> ${data.strMeasure7} ${data.strIngredient7}</li>
                        <li class="ingredients-list"> ${data.strMeasure8} ${data.strIngredient8}</li>
                        <li class="ingredients-list"> ${data.strMeasure9} ${data.strIngredient9}</li>
                        <li class="ingredients-list"> ${data.strMeasure10} ${data.strIngredient10}</li>
                        <li class="ingredients-list"> ${data.strMeasure11} ${data.strIngredient11}</li>
                        <li class="ingredients-list"> ${data.strMeasure12} ${data.strIngredient12}</li>
                    </ul>
                    `;
                    mealDetail.className = 'ingredients';
                    document.getElementById('meal-details').style.display = "block";
                }
        }



