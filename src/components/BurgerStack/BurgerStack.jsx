// src/components/BurgerStack/BurgerStack.jsx


const BurgerStack = (props) => {

return 
    <ul>
      {props.stack.map((ingredient, index))
    </ul>;
  };
  
  export default BurgerStack;
  
const IngredientList = (props) => {


  return (
      <ul>
          {props.ingredients.map((ingredient, index) => (
              <li key={index}>
                  <p>{ingredient.name}</p>
                   <p>{ingredient.color}</p>
                  <button onClick={() => props.addToBurger(ingredient)}>Add to Burger</button>
              </li>
          ))}
      </ul>
  );
};