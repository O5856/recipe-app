
import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './assets/icons-search.svg'
import MyRecipesComponent from './MyRecipesComponent';


function App() {
  const MY_ID = "0d5c89b7";
  const MY_KEY = "0fa88f97df6d55dd35335b5c5fc639b2";
  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("salmon");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits)
      setMyRecipes(data.hits)

    }
    getRecipe()
  }, [wordSubmitted])


  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
setWordSubmitted(mySearch)
  }
  return (
    <div >
      <div className='banner' >
        <div >
          <div className='container heading-container'>
            <p>Recipes</p>
          </div>
            <form className='input-container' onSubmit={finalSearch}>
            <input className='input' type='text' placeholder='Search ingredients' onChange={myRecipeSearch} value={mySearch} />
            <button onClick={finalSearch} className='btn'>
              <img className='logo-img' src={searchIcon} alt='searchIcon' />
            </button> 
          </form>
   

        </div>
      </div>
      <div className='recipes-results'>
        {myRecipes.map((element, index) => (
          <MyRecipesComponent
            key={index}
            label={element.recipe.label}
            image={element.recipe.image}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredients}
            caution={element.recipe.cautions}
            time={element.recipe.totalTime}
            url={element.recipe.url}
          />

        ))
        }
      </div>
    </div>
  );
}

export default App;
