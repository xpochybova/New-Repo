import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, ListGroup} from 'react-bootstrap';

function RecipeDetailIngredients(props) {
const wellStyles = {padding: '10px',margin: '10px', fontSize: 20};

  return (
    <div>

       <ListGroup>
           {props.ingredients.map(ingredient => (

             <ListGroupItem key={ingredient._id} >
               <b>
                 {ingredient.amount}
                 {ingredient.amountUnit}
                 {" "}
               </b>
                {ingredient.name}
            </ListGroupItem>

          ))}
      </ListGroup>

    </div>
  );
}

RecipeDetailIngredients.propTypes = {
  ingredients: PropTypes.array,
};

export default RecipeDetailIngredients;
