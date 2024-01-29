function MyRecipesComponent({ label, image, calories, ingredients, caution, time, url }) {


    return (
        <div className="recipe-card">
            <h2>{label}</h2>
            <img src={image} alt="recipe-image" />

            <div className="recipe-description">
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul className="ingredients-list">
                        {ingredients.map((product, index) => (
                            <li key={index}>{product.food}</li>
                        ))}

                    </ul>
                </div>



                <div>
                    <p>Caution:
                        <span> {caution}</span>
                    </p>

                    <p>Total time:
                        <span> {time} min</span>
                    </p>

                    <p> Calories:
                        <span> {calories.toFixed()}</span></p>
                    <p>Instructions: <a href={url}>full recipe</a></p>
                </div>
            </div>

        </div>


    )
}

export default MyRecipesComponent