// src/components/BurgerStack/BurgerStack.jsx


const BurgerStack = (props) => {

return (
    <ul>
      {props.stack.length === 0 ? <p>Remove Ingredient!</p> : null}
      {props.stack.map((ingredient, index) => (
        <li style= {{backgroundColor: ingredient.color}}
           key={index}>
          <p>{ingredient.name}</p>
          <button onClick={() => props.removeFromBurger(index)}>x</button>
        </li>
      ))}
    </ul>
  );
}
  export default BurgerStack;
  
